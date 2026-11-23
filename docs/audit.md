# Audit Pablolinguo : journal

Journal vivant de l'audit full-stack (front, back, design system). Chaque constat a une gravité, un statut et le
commit qui le traite. Quand un commit ferme un constat, il met sa ligne à jour. Un constat écarté reste ici,
en « accepté », avec la raison.

Statuts : ⬜ ouvert · 🟡 en cours · ✅ fait · ➖ accepté. Gravité : Critical · High · Medium · Low.

Premier audit : 2026-11-23, sur `a250bf6`. Mesures faites sur le code et sur le projet Supabase (advisors, catalogue).

## Synthèse

| # | Constat | Gravité | Statut |
|---|---|---|---|
| B1 | « Supprimer mon compte » échoue en production : la fonction n'existe pas en base | Critical | ✅ appliquée par Pi le 23/11, vérifiée en base |
| B2 | Les tests ne bloquent pas la mise en ligne | High | ✅ `npm run build` lance `npm test` |
| F1 | Les tokens existent mais les écrans ne s'en servent pas | High | ✅ échelle de texte, espacements Tailwind, rayons, ombres ; test étendu |
| F2 | Les composants sont recopiés à la main dans le HTML généré par le JS | High | ✅ atomes, cartes, panneaux, retour juste/faux, lignes de liste et bandeau construits par `UI.*` ; un test refuse d'écrire leurs classes dans `src/app` |
| F3 | 20 fichiers qui partagent 169 variables globales | High | ⬜ |
| F4 | Des motifs d'écran qui sont des composants déguisés | Medium | 🟡 dans `ui/` avec fiche au catalogue : option, feedback, list-row, empty-state (+ `UI.emptyState`), popover, toast (+ `toast()`) ; `.langseg` supprimé (inutilisé). Reste : fusionner les 4 variantes de list-row en une |
| F5 | Des emoji servent d'icônes à côté des icônes pixel | Medium | ✅ pixel speaker, mic, bulb ; test qui refuse tout emoji dans src/app et index.html |
| F6 | Deux façons différentes de corriger une réponse | Medium | ✅ un seul `sameAns` dans `src/app/lib/answers.js` pour exercices, mots et écoute ; `tests/answers.test.js` (EN, ES, RU cyrillique et latin, й ≠ и) |
| B3 | Deux appareils ouverts en même temps s'écrasent leurs progrès | Medium | ✅ écriture conditionnelle sur `updated_at` ; en cas de conflit, fusion à trois voies (les compteurs XP / ok / ko s'additionnent, les listes s'unissent) ; `refresh()` au retour au premier plan ; tests à deux appareils dans `tests/store.test.js` |
| F7 | Pas d'état de chargement au démarrage | Medium | ⬜ |
| B4 | Protection contre les mots de passe fuités désactivée | Medium | ⬜ réglage du dashboard Supabase |
| F8 | 4 polices Google, dont une pour 2 éléments | Low | ⬜ |
| B5 | Une requête invalide consomme le quota IA | Low | ✅ la demande est validée avant le quota ; test dans `tests/backend.test.js` |
| B6 | La migration de suppression de compte se dit « appliquée » alors qu'elle ne l'est pas | Low | ✅ en-tête corrigé |
| F9 | `dev.log` est versionné | Low | ✅ retiré du dépôt |

Ce qui va bien, vérifié : RLS active avec 4 policies explicites sur `docs`, identité toujours tirée de `auth.uid()`,
fonction `SECURITY DEFINER` avec `search_path` vide et `execute` retiré à `anon` ; aucun secret dans le dépôt (la clé
Supabase est la clé publiable) ; l'API IA construit ses prompts côté serveur, borne chaque champ, vérifie le jeton et
applique un quota ; les 167 insertions de texte dans le HTML passent par `esc()` (contrôle des champs saisis par
l'utilisateur : réponse, mots perso, nom) ; advisors performance : rien.

---

## Back

### B1 · La suppression de compte est cassée en production

**Problem.** Le bouton « Supprimer mon compte » appelle `rpc("delete_my_account")`, mais la base ne contient que
`bump_ai_usage` (requête sur `pg_proc` du projet `xfqifdpftlvkznhtysnw`). La migration `20261119104000` n'a jamais été appliquée.

**Impact.** Un utilisateur qui veut partir ne peut pas effacer ses données : c'est un droit RGPD, et l'app affiche
une erreur sur une action sensible.

**Recommendation.** Appliquer la migration telle quelle (la fonction ne supprime que l'appelant, et ses lignes
partent en cascade). Puis tester avec un compte jetable.

**Priority.** Critical

**Open questions.** Accord de Pi pour l'appliquer (c'est une fonction qui supprime des comptes).

### B2 · Les tests ne bloquent pas la mise en ligne

**Problem.** Vercel lance `npm run build` sur chaque push vers `main`, sans `npm test`. Il n'y a pas de CI GitHub.

**Impact.** Un test rouge (couleur en dur, composant absent du catalogue…) part quand même en production. Les garde-fous du design system ne gardent rien.

**Recommendation.** `npm run build` commence par `npm test` : un test rouge fait échouer le déploiement. Fait dans ce commit.

**Priority.** High

### B3 · Deux appareils ouverts s'écrasent leurs progrès

**Problem.** `src/store.js` charge tout au démarrage, puis réécrit chaque document en entier (`upsert`). Les
`onSnapshot` ne sont que locaux : un téléphone et un ordinateur ouverts en même temps ne se voient pas.

**Impact.** Le dernier appareil qui écrit gagne. Les révisions (`vocab/srs`) et l'XP faites sur l'autre sont perdues sans message.

**Recommendation.** Écrire les champs modifiés plutôt que le document entier pour les compteurs (XP, révisions),
ou recharger un document avant de le réécrire s'il a changé (`updated_at`). Plus tard : Supabase Realtime sur `docs`.

**Priority.** Medium

**Open questions.** Pi utilise-t-il l'app sur deux appareils à la fois ?

### B4 · Mots de passe fuités acceptés

**Problem.** L'advisor sécurité signale que la vérification HaveIBeenPwned est désactivée.

**Impact.** Un mot de passe déjà publié dans une fuite est accepté à l'inscription.

**Recommendation.** L'activer dans Supabase : Authentication › Providers › Email › « Prevent use of leaked passwords ».
Réglage du dashboard, aucun code. [Doc](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection)

**Priority.** Medium

### B5 · Une requête invalide consomme le quota IA

**Problem.** `api/ai.js` incrémente le quota avant de vérifier `kind`.

**Impact.** Faible : seul le compte appelant perd une unité.

**Recommendation.** Valider le corps avant `bump_ai_usage`.

**Priority.** Low

### Accepté

- ➖ L'advisor « SECURITY DEFINER exécutable par authenticated » sur `bump_ai_usage` : voulu. C'est la seule façon de
  faire avancer le compteur, et elle ne touche que la ligne de l'appelant (commentaire dans la migration).
- ➖ `docs.data` n'est pas validé en base : chaque compte n'écrit que ses propres lignes, rien n'est partagé, et la taille
  est bornée (256 Ko). À revoir le jour où des données deviennent partagées (classement entre amis).

---

## Front

### F1 · Les tokens existent, les écrans ne s'en servent pas

**Problem.** Dans le CSS des écrans (395 lignes de `public/index.html`), il y a 0 usage de `--s1…--s6`, 18 tailles de
texte différentes (de 10 à 72 px), 14 rayons différents (2 à 32 px) et 4 ombres en `rgba` écrites à la main. Le test
ne voit que les couleurs hexadécimales.

**Impact.** Le design system n'en est un que sur le papier : chaque écran invente ses valeurs, et changer
l'espacement ou la typo de l'app veut dire repasser partout.

**Recommendation.**
1. Ajouter une échelle de texte en tokens (`--fs-xs` 11, `--fs-sm` 12, `--fs-md` 13, `--fs-base` 14, `--fs-lg` 16, `--fs-xl` 18, `--fs-2xl` 22, `--fs-display` 36) et ramener les 18 tailles sur ces 8.
2. Remplacer les rayons par `--r-sm/md/r/lg/pill` et les ombres par `--shadow*`.
3. Étendre le test : pas de `rgba(`, pas de `font-size`, `border-radius` ni `box-shadow` en px hors de `ui/`.

**Priority.** High

**Open questions.** Les 2–3 tailles qui bougeront de 1 px (19 → 18, 15 → 14…) : à valider sur captures.

### F2 · Les composants sont recopiés à la main dans le JS

**Problem.** Les écrans fabriquent leur HTML en chaînes (52 `innerHTML`). Le balisage des composants y est réécrit à
chaque fois : `class="btn ghost"` 10 fois, `mini` 17, `pill p-good` 3, `meter` 5, plus les en-têtes et les cartes.

**Impact.** C'est exactement le « composant en dur » : changer un bouton (accessibilité, icône, taille) veut dire
retrouver chaque copie. Une variante oubliée diverge en silence.

**Recommendation.** Des fonctions de rendu dans `ui/components/` à côté de leur CSS : `button({label, variant, size, attrs})`,
`pill()`, `meter()`, `card()`, `pageHead()`, `emptyState()`… Les écrans les appellent au lieu d'écrire les classes.
Un test interdit `class="btn`, `class="mini"`, `class="pill`, `class="card"` dans `src/app`. Migration écran par écran.

**Priority.** High

### F3 · 20 fichiers, une seule portée globale

**Problem.** `src/app` est découpé par zones, mais les fichiers sont joints dans un ordre fixe et partagent 169 noms
globaux (`S`, `PACK`, `T`, `SRS`…). Aucun fichier ne déclare ce dont il dépend.

**Impact.** Renommer ou déplacer une fonction peut casser un autre écran sans erreur au build. L'ordre de
`order.json` est une dépendance cachée. C'est la dette qui rendra l'app fragile en grandissant.

**Recommendation.** Passer en vrais modules ES (esbuild bundle), dans cet ordre : `lib/` (fonctions pures, testées),
puis `data/` (état et accès aux documents : l'équivalent des hooks, `useWords`, `useProgress`, avec abonnement),
puis un écran à la fois. Chaque étape vérifiée par captures comparées au pixel.

**Priority.** High

### F4 · Des composants déguisés en styles d'écran

**Problem.** Plusieurs motifs du CSS des écrans se répètent d'un écran à l'autre sans être des composants :
ligne de liste (`.l-item`, `.quest`, `.skill`), option de réponse (`.l-opt`, `.pick`), retour juste/faux (`.verdict`),
menu (`.lvlpop`), état vide (`.l-empty`), notification (`.toast`), bandeau d'installation (`.install`), et un
deuxième choix segmenté (`.langseg` à côté de `.seg`).

**Impact.** Chaque écran a sa version : hauteurs, bordures et états (sélectionné, faux, désactivé) diffèrent légèrement.

**Recommendation.** Les promouvoir dans `ui/` : molécules `list-row`, `option`, `feedback`, `empty-state` ; organismes
`popover`, `toast` ; supprimer `.langseg` au profit de `.seg`. Chacun avec sa fiche au catalogue.

**Priority.** Medium

### F5 · Des emoji en guise d'icônes

**Problem.** 🔊 (7 fois), 🎙, 💡, ✓, ✕, ⌫, ⏎, ⋮ dans les écrans, alors que le design system a des icônes pixel.

**Impact.** Rendu différent selon le téléphone (Android, iOS, Windows), style incohérent avec les icônes pixel, et lecteurs d'écran qui lisent « haut-parleur avec trois ondes ».

**Recommendation.** Ajouter `speaker`, `mic`, `bulb`, `check`, `close`, `back` aux icônes pixel, et un test qui
interdit les emoji dans `src/app`.

**Priority.** Medium

### F6 · Deux correcteurs de réponse

**Problem.** Les exercices comparent avec `norm()` (`screens/train/trainer.js`), l'écoute avec `normAns()`
(`screens/cours/listen.js`). Ils ne font pas la même chose : l'écoute ne reconnaît pas « can't » = « can not », et en russe elle enlève la brève de й (« мой » et « мои » deviennent identiques).

**Impact.** Une même réponse peut être juste dans un exercice et fausse dans l'écoute.

**Recommendation.** Un seul module `lib/answers.js`, couvert par des tests (anglais, espagnol, russe en cyrillique et en lettres latines).

**Priority.** Medium

### F7 · Pas d'état de chargement au démarrage

**Problem.** Tant que le compte n'est pas chargé, l'accueil affiche des zéros et « EN · – ».

**Impact.** Au premier coup d'œil, l'utilisateur croit avoir perdu sa progression.

**Recommendation.** Un squelette (molécule `skeleton`) jusqu'au premier chargement du profil.

**Priority.** Medium

### F8 · Polices

**Problem.** 4 familles Google Fonts, dont Archivo pour 2 éléments seulement (le chiffre des KPI et le mot du jour).

**Impact.** Une requête et quelques dizaines de Ko en plus, qui bloquent l'affichage du texte au premier chargement.

**Recommendation.** Remplacer Archivo par Geist en gras.

**Priority.** Low

### Mesures

- Premier chargement : environ 440 Ko (avant le 21/11 : environ 900 Ko). Le pack anglais en pèse 292 Ko non minifié (Vercel le compresse).
- `public/index.html` : 40 Ko (HTML et CSS des écrans). `public/app.js` : 81 Ko minifié.
