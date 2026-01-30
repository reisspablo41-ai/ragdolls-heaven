-- Drop existing policies to avoid conflicts
drop policy if exists "Allow authenticated uploads" on storage.objects;
drop policy if exists "Allow authenticated updates" on storage.objects;
drop policy if exists "Allow authenticated deletes" on storage.objects;
drop policy if exists "Allow public viewing" on storage.objects;
drop policy if exists "Allow public uploads" on storage.objects;
drop policy if exists "Allow public updates" on storage.objects;
drop policy if exists "Allow public deletes" on storage.objects;
drop policy if exists "Allow public select" on storage.objects;

-- Create fully permissive policies (Public Read/Write)
-- IMPORTANT: This allows ANYONE to upload/edit/delete in this bucket.
-- Suitable for development or when auth is handled upstream.

create policy "Allow public uploads"
on storage.objects for insert
to public
with check ( bucket_id = 'kitten-photos' );

create policy "Allow public updates"
on storage.objects for update
to public
using ( bucket_id = 'kitten-photos' );

create policy "Allow public deletes"
on storage.objects for delete
to public
using ( bucket_id = 'kitten-photos' );

create policy "Allow public select"
on storage.objects for select
to public
using ( bucket_id = 'kitten-photos' );
