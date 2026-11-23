-- Health check of the hosted database: paste into Supabase › SQL Editor and run.
-- No row = everything matches the rules of AGENTS.md. Each row names a problem to fix with a new migration.
-- Read-only: it only looks at the catalogue.
select 'table without RLS' as problem, c.relname as name
  from pg_class c join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity
union all
select 'function without a fixed search_path', p.proname
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public'
   and not exists (select 1 from unnest(coalesce(p.proconfig, '{}')) x where x like 'search_path=%')
union all
select 'function callable without an account (anon)', p.proname
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public' and has_function_privilege('anon', p.oid, 'execute')
union all
select 'function callable by signed-in accounts but not in the expected list', p.proname
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
 where n.nspname = 'public' and has_function_privilege('authenticated', p.oid, 'execute')
   and p.proname not in ('bump_ai_usage', 'delete_my_account')
union all
select 'policy open to everyone', tablename || ' · ' || policyname
  from pg_policies
 where schemaname = 'public' and (qual = 'true' or with_check = 'true' or 'anon' = any(roles) or 'public' = any(roles))
union all
select 'policy not tied to auth.uid()', tablename || ' · ' || policyname
  from pg_policies
 where schemaname = 'public' and coalesce(qual, '') || coalesce(with_check, '') not like '%auth.uid()%'
union all
select 'table not in the migrations', c.relname
  from pg_class c join pg_namespace n on n.oid = c.relnamespace
 where n.nspname = 'public' and c.relkind = 'r' and c.relname not in ('docs', 'ai_usage')
union all
select 'storage bucket (none expected)', id from storage.buckets;
