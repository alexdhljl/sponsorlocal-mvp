insert into public.categories (name, slug) values
  ('Community', 'community'),
  ('School', 'school'),
  ('Nonprofit', 'nonprofit'),
  ('Culture', 'culture'),
  ('Corporate', 'corporate'),
  ('Birthday', 'birthday'),
  ('Conference', 'conference')
on conflict (slug) do nothing;
