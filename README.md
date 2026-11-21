# Pablolinguo

Apprendre l'anglais ou l'espagnol de A1 à C2 : chacun choisit son niveau, et les séances, la grammaire et les fiches s'adaptent. Entraînement corrigé par un « prof » IA, vocabulaire en répétition espacée, fiches pratiques par thème. Chaque personne a son compte et sa propre progression.

## Comment c'est construit

| Partie | Où | Rôle |
| --- | --- | --- |
| Page | `public/index.html` | Le HTML des écrans et leur mise en page (CSS propre aux écrans). Aucune logique. |
| Design system | `ui/` | Tokens, icônes et composants (atomes, molécules, organismes). Compilé en `public/ui.css` et `public/ui.js`. Catalogue : `/ui.html`. Règles : `docs/design-system.md`. |
| App | `src/app/` | La logique des écrans, un fichier par partie : `data/` (état, packs de langue, écritures), `screens/` (un dossier ou fichier par onglet), `components/`, `lib/`. Joints dans l'ordre de `src/app/order.json` et minifiés en `public/app.js`. |
| Contenu | `public/lang/` | Un pack par langue (mots, règles, exercices, écoute). `index.js` les liste et ne charge que la langue utilisée. |
| Runtime navigateur | `src/runtime.js`, `src/store.js` | Écran de connexion, stockage par compte, voix (synthèse vocale du navigateur), dictée (reconnaissance vocale Chrome / Safari). Compilé en `public/runtime.js`. |
| Prof IA | `api/ai.js` | Fonction Vercel. Vérifie le compte, applique un quota par jour, construit les prompts côté serveur et appelle Claude (Haiku par défaut). |
| Base | `supabase/migrations/` | Supabase : table `docs` (un document JSON par ligne, une ligne appartient à un compte) et `ai_usage` (quota). La RLS limite chaque compte à ses propres lignes. |

`npm run build` produit les fichiers compilés de `public/` (`runtime.js`, `ui.css`, `ui.js`, `app.js`) : ils ne sont pas versionnés.

Les fichiers de `src/app/` partagent encore une seule portée globale, comme l'ancien script de la page : une fonction d'un fichier est visible dans les autres. Prochaine étape : en faire de vrais modules avec des `import` explicites, un fichier à la fois.

## Mettre en ligne (Vercel)

1. Sur vercel.com : **Add New → Project**, importer `Evacur/Pablolinguo`. Les réglages sont lus depuis `vercel.json` : rien à changer.
2. Dans **Settings → Environment Variables**, ajouter `ANTHROPIC_API_KEY` (clé créée sur console.anthropic.com). Sans clé, l'app marche, mais corrige seulement les réponses exactes.
3. Optionnel : `AI_MODEL` (par défaut `claude-haiku-5-5`) et `AI_DAILY_LIMIT` (par défaut 200 appels par compte et par jour).
4. Dans Supabase, **Authentication → URL Configuration** : mettre l'adresse Vercel dans *Site URL* et dans *Redirect URLs*, sinon le lien de confirmation d'email renvoie vers localhost.

## En local

```bash
npm install
npm run dev     # http://localhost:3000
npm test
```

## À savoir

- La clé Supabase dans `src/config.js` est la clé *publiable* : elle est faite pour être dans le navigateur. Ce sont les policies RLS qui protègent les données.
- Les emails d'inscription partent du serveur mail par défaut de Supabase, limité à quelques emails par heure. Pour ouvrir l'app à beaucoup de monde, brancher un SMTP (Resend, Postmark…) dans Supabase.
