# Pablolinguo

Apprendre l'anglais ou l'espagnol de A1 à C2 : chacun choisit son niveau, et les séances, la grammaire et les fiches s'adaptent. Entraînement corrigé par un « prof » IA, vocabulaire en répétition espacée, fiches pratiques par thème. Chaque personne a son compte et sa propre progression.

## Comment c'est construit

| Partie | Où | Rôle |
| --- | --- | --- |
| Page | `public/index.html` | Le HTML des écrans et leur mise en page (CSS propre aux écrans). Aucune logique. |
| Design system | `ui/` | Tokens, icônes et composants (atomes, molécules, organismes). Compilé en `public/ui.css` et `public/ui.js`. Catalogue : `/ui.html`. Règles : `docs/design-system.md`. |
| App | `src/app/` | La logique des écrans, un fichier par partie : `data/` (état, packs de langue, écritures), `screens/` (un dossier ou fichier par onglet), `components/`, `lib/`. Des modules ES : chacun importe ce qu'il utilise ; esbuild les assemble depuis `src/app/main.js` en `public/app.js`. |
| Contenu | `public/lang/` | Un pack par langue (mots, règles, exercices, écoute), plus `words-<code>.js` : des mots classés par niveau (A1 à C1), proposés seulement aux niveaux égaux ou au-dessus, et `lessons-<code>.js` : un vrai cours par point de grammaire (introduction, parties, exemples, pièges, astuce), affiché dans Cours › Grammaire. `index.js` les liste et ne charge que la langue utilisée. `tests/words.test.js` refuse un mot en double ou mal formé, `tests/lessons.test.js` un point de grammaire sans cours. Un point ne gagne un niveau de maîtrise (sur 3) qu'en réussissant son test, 8 sur 10 (`src/app/lib/mastery.js`, vérifié par `tests/mastery.test.js`) ; une situation est validée par le même seuil. Les suggestions (« À revoir », le mélange du jour, les astuces « Pour toi ») viennent des fautes de chacun sur ses 10 dernières réponses par point (`weakness`). |
| Runtime navigateur | `src/runtime.js`, `src/store.js` | Écran de connexion, stockage par compte, voix (synthèse vocale du navigateur), dictée (reconnaissance vocale Chrome / Safari). Compilé en `public/runtime.js`. |
| Prof IA | `api/ai.js` | Fonction Vercel. Vérifie le compte, applique un quota par jour, construit les prompts côté serveur et appelle Claude (Haiku par défaut). |
| Base | `supabase/migrations/` | Supabase : table `docs` (un document JSON par ligne, une ligne appartient à un compte) et `ai_usage` (quota). La RLS limite chaque compte à ses propres lignes. |

| Garde-fous | `AGENTS.md` | Les règles du projet et où chacune est vérifiée : tests (`tests/`), contrôle GitHub (`.github/workflows/checks.yml`), hook avant commit (`.githooks/`), garde-fou d'agent (`.claude/hooks/`), contrôle de la base en prod (`supabase/checks.sql`). |

`npm run build` produit les fichiers compilés de `public/` (`runtime.js`, `ui.css`, `ui.js`, `app.js`) : ils ne sont pas versionnés.

Chaque fichier de `src/app/` est un module : il importe ce dont il dépend et exporte ce que les autres utilisent. Une valeur que plusieurs écrans changent (la séance en cours `state.T`, les mots `state.MY`…) vit dans l'objet `state` de `data/state.js`, car un module ne peut pas réassigner la variable d'un autre. `lib/` ne dépend de rien d'autre (la langue est passée en argument), donc se teste seul. Restent globaux : les helpers du design system (`UI`, `emo`, `pic`, `toast`, chargés par `ui.js`).

## Mettre en ligne (Vercel)

1. Sur vercel.com : **Add New → Project**, importer `Evacur/Pablolinguo`. Les réglages sont lus depuis `vercel.json` : rien à changer.
2. Dans **Settings → Environment Variables**, ajouter `ANTHROPIC_API_KEY` (clé créée sur console.anthropic.com). Sans clé, l'app marche, mais corrige seulement les réponses exactes.
3. Optionnel : `AI_MODEL` (par défaut `claude-haiku-5-5`) et `AI_DAILY_LIMIT` (par défaut 50 appels par compte et par jour) et `AI_APP_DAILY_LIMIT` (par défaut 500 appels par jour pour toute l'app, tous comptes confondus).
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
