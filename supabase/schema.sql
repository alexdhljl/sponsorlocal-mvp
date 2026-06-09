create extension if not exists "pgcrypto";
create extension if not exists "postgis";

create type public.user_role as enum ('organizer', 'sponsor', 'admin');
create type public.event_status as enum ('draft', 'in_review', 'published', 'funded', 'archived');
create type public.order_status as enum ('pending_payment', 'paid', 'voucher_issued', 'proof_submitted', 'completed', 'disputed', 'refunded');

create table public.users (
  id uuid primary key default gen_random_uuid(),
  role public.user_role not null,
  full_name text not null,
  email text not null unique,
  stripe_customer_id text,
  created_at timestamptz not null default now()
);

create table public.organizer_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  organization_name text not null,
  payout_account_id text,
  trust_status text not null default 'unverified'
);

create table public.sponsor_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  company_name text not null,
  business_type text,
  default_radius_miles numeric not null default 5
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique
);

create table public.locations (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  city text not null,
  region text,
  postal_code text,
  geo geography(point, 4326)
);

create index locations_geo_idx on public.locations using gist (geo);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  organizer_id uuid not null references public.organizer_profiles(id) on delete cascade,
  category_id uuid references public.categories(id),
  location_id uuid references public.locations(id),
  title text not null,
  starts_at timestamptz not null,
  expected_attendees integer not null check (expected_attendees > 0),
  audience_profile text not null,
  event_type text not null,
  description text not null,
  sponsorship_needs text,
  status public.event_status not null default 'draft'
);

create table public.sponsorship_packages (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  name text not null,
  price_cents integer not null check (price_cents > 0),
  platform_fee_bps integer not null default 1200,
  benefits text[] not null default '{}',
  inventory integer not null default 1,
  requires_proof boolean not null default true
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.sponsorship_packages(id),
  sponsor_id uuid not null references public.sponsor_profiles(id),
  amount_cents integer not null,
  platform_fee_cents integer not null,
  status public.order_status not null default 'pending_payment'
);

create table public.vouchers (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders(id) on delete cascade,
  code text not null unique,
  barcode_hash text not null unique,
  redemption_mode text not null default 'in_store_pickup'
);

create table public.proof_submissions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  photo_url text not null,
  social_link text not null,
  status text not null default 'merchant_review'
);
