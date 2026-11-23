# Pablolinguo — règles du projet

Ce fichier fait autorité pour tout agent (et tout humain) qui touche au dépôt. Si une demande contredit
une règle, **signale le conflit avant d'agir**.

Chaque règle dit comment elle est tenue :

- 🤖 **vérifiée par la machine** : la violer fait échouer `npm test`, donc le build Vercel (rien n'est
  mis en ligne), le contrôle GitHub (« Checks »), le commit local (hook `pre-commit`) ou le hook d'agent.
  Si un contrôle bloque, corrige le code, jamais le contrôle.
- 👁 **vérifiée en relecture** seulement.

Le journal de l'audit est [`docs/audit.md`](docs/audit.md) : une correction met à jour sa ligne dans le même
commit, un problème trouvé en chemin s'y ajoute en ⬜ au lieu d'être corrigé en douce.

## Où sont les contrôles

| Contrôle | Fichier | Quand il tourne |
| --- | --- | --- |
| Design system | `tests/design-system.test.js` | `npm test` : commit, GitHub, build Vercel |
| Back (base, secrets, API) | `tests/backend.test.js` | idem |
| Correction des réponses | `tests/answers.test.js` | idem |
| Migrations jamais modifiées | `scripts/check-migrations.sh` | commit et GitHub |
| Garde-fou d'agent | `.claude/hooks/guard.js` | avant chaque écriture ou commande d'un agent |
| Base en production | `supabase/checks.sql` | à la main dans Supabase › SQL Editor : aucune ligne = OK |

## Back (Supabase et `/api/ai`)

Il n'y a pas de serveur applicatif pour les données : **la RLS est le back**.

- 🤖 Toute table de `public` a la RLS activée dans la migration qui la crée ; on ne la désactive jamais.
- 🤖 Une policy est pour `authenticated` et compare la ligne à `auth.uid()`. Pas de `using (true)`.
- 🤖 Toute fonction de `public` fixe `set search_path = ''`. Une `SECURITY DEFINER` dit pourquoi en
  commentaire (« SECURITY DEFINER on purpose »), n'agit que sur `auth.uid()` et est fermée à `anon`.
- 🤖 Une nouvelle table ou fonction appelable s'ajoute aussi à la liste attendue de `supabase/checks.sql`.
- 🤖 Toute modification de schéma est une nouvelle migration `supabase/migrations/<AAAAMMJJHHMMSS>_<sujet>.sql`
  (horodatage UTC postérieur au dernier). **Une migration déjà dans `main` ne se modifie jamais.**
- 👁 La base hébergée ne change que par Pi (SQL Editor) après relecture de la migration ; un agent n'y écrit pas.
- 🤖 Aucun secret dans le dépôt : seule la clé publiable Supabase (`src/config.js`). La clé Anthropic vit dans
  Vercel. Pas de `.env` commité ; la clé `service_role` n'est utilisée nulle part.
- 🤖 `/api/ai` : l'identité vient du jeton Supabase, jamais du corps ; la demande est validée avant que le quota
  bouge ; le quota quotidien est appliqué.
- 👁 Pas de donnée personnelle dans les logs, pas de message d'erreur interne renvoyé au navigateur.
- 👁 Les identifiants de documents (`me/profile`, `vocab/srs_<code>`…) ne changent pas : les comptes perdraient
  leurs données.

## Design system (`ui/`)

Règles complètes : [`docs/design-system.md`](docs/design-system.md). Catalogue : `/ui.html`.

- 🤖 Aucune couleur, taille de texte, espacement, rayon ou ombre en dur hors de `ui/tokens`.
- 🤖 Un écran ne redéfinit pas un composant ; un atome se construit avec `UI.*`, jamais en écrivant sa classe.
- 🤖 Tout composant a un niveau (atome, molécule, organisme), est importé par `ui/index.css` et a sa fiche au
  catalogue ; un niveau n'importe que lui-même ou ceux du dessous.
- 🤖 Icônes : `pic()` et `emo()` de `ui/icons`, aucun emoji dans l'app.
- 🤖 Pas de CSS mort : toute classe stylée est utilisée quelque part (exception écrite dans le test).
- 🤖 Toute sheet est un dialogue modal étiqueté avec un bouton de fermeture.
- 👁 Si un composant ou un token manque, propose-le dans `ui/` au lieu de l'improviser dans un écran.
- 👁 Chaque écran gère chargement, vide et erreur. Zones tactiles ≥ 44 px, `aria-label` sur tout bouton sans texte.

## Façon de travailler

- 👁 Petit et ciblé ; pas de dépendance nouvelle sans accord de Pi.
- 🤖 Les fichiers générés (`public/app.js`, `ui.css`, `ui.js`, `runtime.js`) ne s'éditent pas : on édite `src/` ou `ui/`.
- 🤖 Pas de `--no-verify`, pas de push forcé.
- 👁 Un refactor visuel se vérifie par captures avant/après identiques ; un bug corrigé vient avec son test.
- 👁 Avant de dire « fini » : `npm run build` (tests compris) et dire ce qui n'a pas pu être vérifié.
