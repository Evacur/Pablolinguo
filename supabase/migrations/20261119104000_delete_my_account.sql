-- NOT applied yet (checked 2026-11-23: the function is missing on the project). Needs Pi's go: see docs/audit.md, B1.
-- Lets an account delete itself (RGPD right to erasure) without a server holding the service key.
-- SECURITY DEFINER on purpose: only the database owner may delete from auth.users. The function
-- takes no argument and only ever deletes the caller (auth.uid()); docs and ai_usage rows go
-- with it through their "on delete cascade" foreign keys.
create or replace function public.delete_my_account()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not authenticated'; end if;
  delete from auth.users where id = uid;
end $$;
revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;
