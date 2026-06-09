# SponsorLocal MVP

SponsorLocal is a Next.js + Supabase + Stripe MVP for a Local Community Sponsorship Marketplace. It helps organizers publish sponsor-ready events and helps sponsors discover, message, and purchase local sponsorship packages.

## Included

- Premium responsive marketplace UI with Tailwind CSS
- Homepage, event list, event detail, create event flow
- Sponsor dashboard, organizer dashboard, admin review console
- Proof-of-exposure page with voucher-oriented fulfillment
- Next.js API routes for checkout, inquiries, AI prospectus, vouchers, and proof submission
- Supabase schema and demo seed data
- Stripe Checkout integration with a no-key demo fallback

## Page Structure

- `/` - landing page and marketplace value story
- `/events` - searchable event discovery feed
- `/events/[id]` - event details and sponsorship package purchase
- `/create-event` - organizer event creation and AI package drafting UI
- `/sponsor` - sponsor dashboard for saved events, messages, and purchases
- `/organizer` - organizer dashboard for events, inquiries, and sponsorship revenue
- `/admin` - admin review queue for events and packages
- `/proof` - proof upload and voucher fulfillment workflow

## Database

Run these files in Supabase SQL editor:

1. `supabase/schema.sql`
2. `supabase/seed.sql`

The schema includes:

- `users`
- `organizer_profiles`
- `sponsor_profiles`
- `events`
- `sponsorship_packages`
- `inquiries`
- `orders`
- `messages`
- `reviews`
- `categories`
- `locations`
- `vouchers`
- `proof_submissions`

It also includes a `nearby_events(lat, lng, radius_miles)` function using PostGIS for distance-based discovery.

## API Routes

- `POST /api/orders/checkout` - creates a Stripe Checkout session for a sponsorship package
- `POST /api/sponsorships/apply` - locks a package slot before payment
- `POST /api/inquiries` - creates a sponsor inquiry
- `POST /api/ai/prospectus` - returns AI-style prospectus copy and package suggestions
- `POST /api/sponsorships/voucher` - issues a demo digital voucher code
- `POST /api/sponsorships/verify-proof` - accepts proof photo and social link metadata

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Stripe is optional for demo mode. Without `STRIPE_SECRET_KEY`, checkout returns a JSON demo order instead of redirecting to Stripe.

## Next Steps

- Connect Supabase Auth and row-level security policies
- Replace mock event reads with Supabase queries
- Add Stripe webhooks for paid order fulfillment and voucher issuance
- Add file storage for proof photos
- Add real AI provider calls for prospectus generation and sponsor recommendations
