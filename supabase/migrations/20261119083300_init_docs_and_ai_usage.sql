-- Applied to the Pablolinguo project on 2026-11-19.
-- Per-user document store: each row is one document (collection + id) owned by one account.
create table public.docs (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  coll text not null check (char_length(coll) between 1 and 40),
  id text not null check (char_length(id) between 1 and 120),
  data jsonb not null default '{}'::jsonb check (pg_column_size(data) < 262144),
  updated_at timestamptz not null default now(),
  primary key (user_id, coll, id)
);
alter table public.docs enable row level security;
create policy "own docs: read" on public.docs for select to authenticated using (user_id = (select auth.uid()));
create policy "own docs: insert" on public.docs for insert to authenticated with check (user_id = (select auth.uid()));
create policy "own docs: update" on public.docs for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "own docs: delete" on public.docs for delete to authenticated using (user_id = (select auth.uid()));

-- Daily AI quota per account, bumped by /api/ai before each AI call.
create table public.ai_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null default current_date,
  n int not null default 0,
  primary key (user_id, day)
);
alter table public.ai_usage enable row level security;
create policy "own usage: read" on public.ai_usage for select to authenticated using (user_id = (select auth.uid()));

-- SECURITY DEFINER on purpose: accounts have no write policy on ai_usage, so this is the only
-- way the counter moves, and it only ever increments the caller's own row (auth.uid()).
-- Calling it directly can only use up one's own quota.
create or replace function public.bump_ai_usage()
returns int
language plpgsql
security definer
set search_path = ''
as $$
declare uid uuid := auth.uid(); cnt int;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  insert into public.ai_usage (user_id, day, n) values (uid, current_date, 1)
  on conflict (user_id, day) do update set n = public.ai_usage.n + 1
  returning n into cnt;
  return cnt;
end $$;
revoke all on function public.bump_ai_usage() from public, anon;
grant execute on function public.bump_ai_usage() to authenticated;
