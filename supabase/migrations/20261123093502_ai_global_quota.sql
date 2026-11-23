-- Total AI calls today, all accounts together, so /api/ai can stop at a ceiling for the whole app
-- (protects the bill if many accounts are created). Returns one number, never a row or an account.
-- SECURITY DEFINER on purpose: RLS lets an account read only its own ai_usage row, and the total needs
-- all of them. The function only sums today's counters; it does not read or change anything else, and
-- it requires a signed-in caller (auth.uid()).
create or replace function public.ai_calls_today()
returns int
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then raise exception 'not authenticated'; end if;
  return coalesce((select sum(n) from public.ai_usage where day = current_date), 0)::int;
end $$;
revoke all on function public.ai_calls_today() from public, anon;
grant execute on function public.ai_calls_today() to authenticated;
