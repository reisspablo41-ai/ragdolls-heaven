-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Kittens Table
create table public.kittens (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  gender text check (gender in ('Male', 'Female')),
  birth_date date,
  price numeric,
  status text default 'Available' check (status in ('Available', 'Reserved', 'Sold')),
  description text,
  is_featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Kitten Images Table
create table public.kitten_images (
  id uuid default uuid_generate_v4() primary key,
  kitten_id uuid references public.kittens(id) on delete cascade not null,
  image_url text not null,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Inquiries Table
create table public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  message text,
  kitten_id uuid references public.kittens(id) on delete set null,
  status text default 'New' check (status in ('New', 'Read', 'Replied', 'Archived')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Testimonials Table
create table public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  client_name text not null,
  location text,
  content text not null,
  rating integer check (rating >= 1 and rating <= 5) default 5,
  photo_url text, -- Optional photo of the cat/owner
  approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Storage Buckets Setup (RLS policies to be added manually or via script if supported)
insert into storage.buckets (id, name, public) 
values ('kitten-photos', 'kitten-photos', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public) 
values ('testimonials', 'testimonials', true)
on conflict (id) do nothing;

-- RLS Policies (Basic examples, refine as needed)
alter table public.kittens enable row level security;
alter table public.kitten_images enable row level security;
alter table public.inquiries enable row level security;
alter table public.testimonials enable row level security;

-- Everyone can read kittens and images
create policy "Allow public read access on kittens" on public.kittens for select using (true);
create policy "Allow public read access on kitten_images" on public.kitten_images for select using (true);

-- Only authenticated admins can insert/update/delete kittens (Assuming auth setup)
-- taking a shortcut for now, usually you'd check auth.uid() or a specific role
create policy "Allow authenticated insert on kittens" on public.kittens for insert to authenticated with check (true);
create policy "Allow authenticated update on kittens" on public.kittens for update to authenticated using (true);
create policy "Allow authenticated delete on kittens" on public.kittens for delete to authenticated using (true);

-- Similar for images
create policy "Allow authenticated modify on kitten_images" on public.kitten_images for all to authenticated using (true);

-- Inquiries: Public can insert, only admin can view
create policy "Allow public insert on inquiries" on public.inquiries for insert with check (true);
create policy "Allow authenticated view on inquiries" on public.inquiries for select to authenticated using (true);

-- Testimonials: Public read approved, only admin write
create policy "Allow public read approved testimonials" on public.testimonials for select using (approved = true);
create policy "Allow authenticated all on testimonials" on public.testimonials for all to authenticated using (true);
