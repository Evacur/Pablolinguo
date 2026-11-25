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
| F3 | 20 fichiers qui partagent 169 variables globales | High | ✅ modules ES bundlés par esbuild depuis `src/app/main.js` (`order.json` supprimé) ; 21 valeurs changées par plusieurs écrans dans `state` (`data/state.js`) ; `lib/answers.js` pur (langue en argument), testé par import ; doublon mort `renderAvatar` de `writes.js` supprimé. Le build échoue si un fichier n'est importé par personne. Restent : des imports circulaires entre écrans (sans effet au chargement, vérifié), et aucun contrôle automatique d'un `import` oublié (il faudrait un parseur JS en dépendance de dev) |
| F4 | Des motifs d'écran qui sont des composants déguisés | Medium | ✅ dans `ui/` avec fiche au catalogue : option, feedback, list-row, empty-state (+ `UI.emptyState`), popover, toast (+ `toast()`) ; `.langseg` supprimé (inutilisé). Les 5 lignes de liste (missions, points, choix, extraits, réglages du profil) sont une seule `.list-row` (`UI.listRow`, `UI.list`) |
| F5 | Des emoji servent d'icônes à côté des icônes pixel | Medium | ✅ pixel speaker, mic, bulb ; test qui refuse tout emoji dans src/app et index.html |
| F6 | Deux façons différentes de corriger une réponse | Medium | ✅ un seul `sameAns` dans `src/app/lib/answers.js` pour exercices, mots et écoute ; `tests/answers.test.js` (EN, ES, RU cyrillique et latin, й ≠ и) |
| B3 | Deux appareils ouverts en même temps s'écrasent leurs progrès | Medium | ✅ écriture conditionnelle sur `updated_at` ; en cas de conflit, fusion à trois voies (les compteurs XP / ok / ko s'additionnent, les listes s'unissent) ; `refresh()` au retour au premier plan ; tests à deux appareils dans `tests/store.test.js` |
| F7 | Pas d'état de chargement au démarrage | Medium | ✅ molécule `skeleton` : en-tête, bandeau, missions et points à revoir en barres grises jusqu'au chargement du profil |
| B4 | Protection contre les mots de passe fuités désactivée | Medium | ⬜ réglage du dashboard Supabase |
| F8 | 4 polices Google, dont une pour 2 éléments | Low | accepté : Archivo sert à 7 endroits (chiffres, mot du jour, titres larges), pas 2 ; Pi la garde pour son style (2026-11-23) |
| B5 | Une requête invalide consomme le quota IA | Low | ✅ la demande est validée avant le quota ; test dans `tests/backend.test.js` |
| B6 | La migration de suppression de compte se dit « appliquée » alors qu'elle ne l'est pas | Low | ✅ en-tête corrigé |
| F9 | `dev.log` est versionné | Low | ✅ retiré du dépôt |
| R1 | Revue du 23/11 : « Encore une série » sur Mes fautes lançait une série vide notée « Parfait » | Medium | ✅ une série vide ramène à S'entraîner avec un message |
| R2 | Ouvrir Cours cochait « Une situation » (+10 XP) sans ouvrir de situation | Medium | ✅ la mission se valide à l'ouverture d'une fiche de situation |
| R3 | Test de situation possible avec 1 à 3 questions (thèmes neufs au niveau A1) | Medium | ✅ le test demande 4 exercices au niveau de l'apprenant (`themeCount`), sinon la fiche dit pourquoi |
| R4 | Une sauvegarde en retard peut écraser des progrès plus récents (onSnapshot qui renvoie une copie ancienne) | Medium | ✅ une écriture en file lit l'état au moment de partir (XP, réponses, points, mots, situations, écoute) ; le store marque l'écho de ses propres écritures (`hasPendingWrites`), la révision des mots l'ignore ; tests dans `tests/store.test.js` |
| R5 | « Tout est fait » annoncé alors que le plan du jour montre 4/5 | Low | ✅ le message suit le plan de l'accueil (`planDone`) ; le défi n'est plus une étape du plan mais une carte au-dessus |
| R6 | « Commencer la séance » ouvrait S'entraîner au lieu de lancer la séance, et effaçait une série en cours | Low | ✅ lance le mélange ; une série en cours est gardée ; Express compte pour la mission |
| R7 | Le défi s'ouvrait à 80 % des pastilles, l'écran parle de points validés | Low | ✅ `bossReady` : 80 % des points validés ; test dans `tests/mastery.test.js` |
| R8 | Les écouteurs de la dictée s'empilaient à chaque exercice | Low | ✅ enregistrés une seule fois |
| R9 | Onglets sans `tabpanel` ni ordre de tabulation | Low | ✅ `id`, `tabpanel`, un seul onglet dans la tabulation ; flèches non gérées |
| R10 | Écoute : le choix de niveau défile sur le côté en 320 px | Low | ✅ retiré (Pi) : Écoute suit le niveau choisi en haut, comme Grammaire |
| R11 | XP retirés de l'app (Pi, 23/11) : la série se calculait sur `xp > 0` | Low | ✅ un jour compte par ce qui y a été fait (`a`), les anciens jours avec XP comptent toujours (`lib/streak.js`, `tests/streak.test.js`) ; le champ `xp` déjà enregistré n'est ni lu ni effacé |
| R12 | Exercices (S'entraîner) sur téléphone : le bouton « Vérifier » peut passer sous le clavier, la séance ne suit pas la hauteur visible comme la révision des mots (`--vvh`, `UI.dock`) | Low | ⬜ à aligner sur la révision des mots |
| R13 | Conversation avec un personnage (`/api/ai`, kind `chat` et `debrief`) : la route recevait du texte libre de l'élève | Medium | ✅ retiré (Pi, 23/11) : le mode Parler est supprimé, repoussé à bien plus tard ; `/api/ai` ne garde que `word` et `correct`. Un document `talks/<code>` a pu être écrit pour un compte qui a réussi une scène : il n'est plus lu ni effacé |
| R14 | Structure revue le 23/11 (demande de Pi) : le même contenu était rangé à trois ou quatre endroits (grammaire dans Accueil, S'entraîner et Cours ; thèmes dans S'entraîner, Mots et Cours) et chaque onglet avait des sous-onglets | Medium | ✅ trois onglets sans sous-onglets : Accueil (l'action du moment, le plan, les séances libres), Apprendre (une fiche par point : cours, entraînement de 5 exercices, test ; situations ; écoute ; faux amis et astuces), Mots (révision, recherche, mes mots, thèmes). Une séance n'est plus un onglet : la quitter ramène à l'écran d'où elle a été lancée. Progrès et défi du niveau aussi dans le profil |
| R15 | App des stores commencée le 24/11 (demande de Pi) : `mobile/`, Expo, mêmes comptes et mêmes données que le site | Medium | ⬜ en cours : connexion, Accueil, Apprendre (fiches), Mots (compteurs), profil et suppression du compte faits ; exercices (entraînement de 5, test de 10 qui ajoute un point, séance express) et révision des mots, avec les mêmes enregistrements que le site. Reste : exercices « associe » et défi du niveau, mes mots, situations, choix du niveau pour un compte créé dans l'app (sinon A2), écoute, IA, comptes développeur, builds EAS, fiches des stores. Le lien « mot de passe oublié » ouvre le site |
| R16 | Connexion de l'app (Pi, 24/11, journaux Supabase) : message unique « adresse ou mot de passe incorrect » pour tout ; une inscription avec une adresse déjà inscrite disait « regarde tes mails » alors que rien ne part ; quota de mails (429) affiché comme une erreur de compte ; lien de réinitialisation ouvert deux fois = « lien expiré » | Medium | ✅ messages par code d'erreur (`mobile/src/lib/auth-messages.ts`), adresse déjà inscrite détectée, bouton afficher / masquer le mot de passe ; inscription et mot de passe oublié par un code à 6 chiffres tapé dans l'app (plus de passage par le site), changement de mot de passe dans le profil. ⬜ reste côté tableau de bord (Pi) : ajouter {{ .Token }} aux modèles de mail « Confirm signup » et « Reset password », et un SMTP à soi, le serveur de mails par défaut de Supabase n'envoie que quelques mails par heure. Pas de test automatique : l'app n'a pas encore de lanceur de tests TypeScript |
| R17 | Sons dans l'app (24/11) : l'app lit les voix Google du site (`public/audio`, mêmes fichiers que le web, lus en ligne depuis pablolinguo.vercel.app) | Low | ✅ révision des mots (le mot est dit après la réponse, et bouton Écouter) et phrases clés des situations (`app/src/lib/audio.ts`). ⬜ les dialogues des situations n'ont presque pas de fichier (EN 6/104, ES 1/101) : à générer avec scripts/tts.py avant d'y mettre un bouton ; les mots ajoutés par l'apprenant restent muets (la voix du téléphone demande expo-speech, dépendance à accepter par Pi). Lecture non essayée sur un téléphone |
| R18 | Prof IA dans l'app (24/11) : une traduction qui ne correspond à aucune réponse modèle part à `/api/ai` (même route, même quota, la clé reste sur Vercel), qui peut l'accepter comme une autre bonne façon de le dire | Low | ✅ `mobile/src/lib/ai.ts`, écran de séance : « Le prof corrige… », erreurs expliquées, repli sur la réponse modèle si le prof ne répond pas ou si le quota du jour est atteint. Non essayé de bout en bout : l'environnement de l'agent ne peut pas joindre pablolinguo.vercel.app |
| R19 | « Mes mots » dans l'app (24/11) : ajout par le prof IA ou écrit « mot = traduction », liste, suppression, révision de ses seuls mots ; ils entrent aussi dans la révision normale | Low | ✅ `mobile/src/app/my-words.tsx`, mêmes documents `mywords` et mêmes bornes que le web (80 / 160 caractères), donc la même liste sur le site et dans l'app. Non essayé sur un téléphone |
| R20 | Test des situations et exercice « Associe » dans l'app (24/11) | Low | ✅ même tirage que le web (9 exercices du thème, niveau et dessous, plus un « Associe » de 4 mots), validé à 8/10, meilleur score dans `situations/<lang>`. Tirage vérifié par un script sur les deux packs ; non essayé sur un téléphone |
| R21 | Retours de Pi sur l'app (24/11) : les thèmes de Mots ne s'ouvraient pas ; le profil n'avait pas les infos du site | Low | ✅ liste des mots d'un thème (traduction, astuce, niveau 0 à 5, voix Google) ; profil avec avatar en couleur, prénom et avatar modifiables, série, points validés, mots appris, progression du niveau, email, confidentialité, à propos. le défi de niveau est arrivé ensuite (R22). Non essayé sur un téléphone |
| R22 | Défi de niveau dans l'app (24/11) : 10 phrases du niveau, 8 justes valident le niveau et font passer au suivant | Low | ✅ mêmes documents que le web (`me/badges`, `me/profile.levels`), les phrases du défi comptent comme vues mais pas pour un point de grammaire. Tirage vérifié par script sur les deux packs et les six niveaux ; non essayé sur un téléphone |
| R23 | Structure du dépôt (Pi, 24/11 : « propre, scalable, qui ne cassera pas le jour du lancement ») : l'app allait chercher contenu, logique et icônes dans les dossiers du site, donc supprimer le site l'aurait cassée | Medium | ✅ `app/` (ex-`mobile/`), `shared/` (contenu, voix, logique, icônes, store, config), `web/` (ancien site, gelé), `landing/`, `api/`. Test `tests/app.test.js` : l'app n'importe hors d'elle que `shared/`. Le build recopie `shared/` et `landing/` dans `web/public/` : les 6 522 fichiers servis sont identiques octet pour octet à avant (sommes md5 comparées). ⬜ Ensuite : prof IA chez Supabase, ✅ sons dans l'app (R24), puis suppression de `web/` à la sortie |
| R24 | Sons de l'app (24/11) : l'app lisait les voix Google en ligne sur le site, donc sans réseau elle restait muette, et le site devait rester en ligne pour elle | Low | ✅ les 6 492 mp3 de `shared/audio` sont dans l'app (`require.context` dans `app/src/lib/audio.ts`, Metro les embarque comme assets : export iOS 6 515 fichiers, 68 Mo). Un texte sans fichier reste muet comme avant. Ajouter des sons = relancer scripts/tts.py puis une nouvelle version de l'app (une mise à jour EAS suffit pour les assets). ⬜ Poids de l'app : ~60 Mo de sons, à surveiller si le contenu grossit (sinon Storage + cache). Lecture non essayée sur un téléphone |
| R25 | Prof IA (24/11, étape 2 du plan validé par Pi) : l'app appelait `/api/ai` sur Vercel, donc dépendait du site, et Vercel Hobby n'est pas pour un usage commercial | Medium | ✅ les règles (prompts, jeton, quotas) passent dans `supabase/functions/ai/core.js`, une seule fois ; `api/ai.js` (ancien site) et la fonction Edge `ai` (`index.ts`, `deno.json` épinglé) ne font que s'y brancher. Tests : les 4 tests de la route passent par ce cœur, plus deux qui gardent les hôtes minces et les versions exactes. Essai local sous Deno 2.9 : GET, sans jeton, mauvaise demande, corps non JSON, et appel Anthropic jusqu'au refus de la fausse clé. ⬜ Pi met `ANTHROPIC_API_KEY` dans les secrets des fonctions Supabase, la fonction est déployée avec son accord, puis l'app l'appelle au lieu de Vercel |
| R26 | Connexion (24/11, Pi : « ça bug, le mail bug », puis « un audit de tous les cas possibles ») : un seul écran à onglets, des cas mal gérés (compte jamais confirmé, retour Android qui ferme l'app, code collé avec du texte, renvoi trop tôt), et le mail par défaut de Supabase limité à quelques envois par heure (journaux : « email rate limit exceeded ») | High | ✅ parcours « une question par écran » choisi par Pi (variante B) : `app/src/app/sign-in.tsx`, briques dans `app/src/components/auth.tsx`, décisions dans `app/src/lib/auth-flow.js`. Cas couverts par `tests/auth-flow.test.js` : e-mail invalide, mot de passe trop court ou trop faible, adresse déjà inscrite (envoi vers la connexion, e-mail gardé), confirmation coupée, trop de mails, pas de réseau ; connexion refusée (même message pour adresse inconnue et mauvais mot de passe, voulu), compte jamais confirmé (nouveau code puis page du code), trop d'essais ; oubli sans dire si l'adresse existe ; code expiré ou faux (vidé), collé avec du texte, validé au 6e chiffre, renvoi bloqué 60 s ; nouveau mot de passe identique. Plus : retour Android d'étape en étape, double appui sans effet, bouton au-dessus du clavier. En chemin : le test « pas de Supabase dans un écran » visait encore `mobile/src` et ne vérifiait plus rien depuis R23 ; corrigé, et vérifié qu'il échoue sur un import ajouté. ⬜ Côté Pi : SMTP Brevo et `{{ .Token }}` dans les deux modèles de mail, sinon les mails restent rares et sans code. Non essayé sur un téléphone |
| R27 | Structure du front (25/11, Pi : « on continue à mieux structurer le front ? … c'est toi l'expert code et moi l'expert design ») : écrans qui refaisaient leurs propres morceaux (barre fermer + progression avec un caractère « ✕ », écran de fin, sections et lignes recopiées), `session.tsx` et `review.tsx` avec leur propre feuille de style et leur `Text`, des nombres en dur (`gap: 2`, `width: 64`, puce 36, tuile 40) | Medium | ✅ briques ajoutées dans `app/src/components/ui.tsx` (`Section`, `Item`, `TopBar`, `Hero`), `glyphs.tsx` (flèche, croix, coche en SVG aux couleurs du thème) et `exercise.tsx` (`ChoiceList`, `MatchBoard`, `OrderBoard`) ; tous les écrans les utilisent ; `space` gagne 0.5, 9 et 16. Écran `catalogue` (développement seulement, lien dans le profil) qui montre toutes les briques. Tenu par deux tests de `tests/app.test.js` : aucun écran n'a de feuille de style ni de `Text` brut, aucun espacement ou taille en chiffres hors du thème (décalages d'ombre exceptés) ; vérifié qu'ils échouent sur une violation ajoutée. Rôles écrits dans `app/AGENTS.md` (« Binôme »). Non vu sur un téléphone |
| R28 | Fermer une page (25/11, Pi : « qu'on soit iso avec les standards du marché ») : chaque page modale avait son bouton « Fermer » en bas, le profil empilait Fermer, Se déconnecter et Supprimer mon compte, le changement de mot de passe avait une flèche retour et un « Annuler » | Medium | ✅ brique `Sheet` (`app/src/components/ui.tsx`) : barre de glissement sur iPhone (la page se tire vers le bas, geste natif de la modale iOS), croix en haut à droite, retour Android. Toutes les pages modales l'utilisent ; plus aucun « Fermer ». Profil : une ligne « Compte » ouvre `app/src/app/account.tsx` (e-mail, mot de passe, et à part « Supprimer mon compte » en ligne rouge avec confirmation) ; « Se déconnecter » reste tout en bas. Repères Mobbin : Perplexity, Copilot, Glovo, Airbnb, Crumbl. Tenu par un test de `tests/app.test.js` (toute page modale est une `Sheet`, aucun « Fermer ») ; vérifié qu'il échoue si une page ne l'est plus. Android : pas de geste vers le bas (une modale Android est plein écran), la croix et le retour suffisent. Non vu sur un téléphone |
| R29 | Explications des exercices (25/11, Pi : « des phrases simples qui expliquent avec un ton de prof, très pédagogue ») : 1 600 explications (800 par langue, défis de niveau compris) en style télégraphique (« Il y a + pluriel → there are ») | Medium | ✅ anglais et espagnol réécrits (`en-a.js`, `en-b.js`, `points-en.js`, `situ-en.js`, et leurs pendants `es-*`, les 1 600) : tutoiement, le pourquoi en une phrase, puis l'astuce ou le piège. Ton validé par Pi sur 4 exemples. Tenu par `tests/content.test.js` : une explication fait 240 caractères au plus. ✅ 3 phrases de plus par point (`more-en.js`, `more-es.js`, 282 exercices ; `tests/content.test.js` exige 17 exercices par point). ✅ 4 nouveaux points par langue, avec leçon et 17 exercices (`points2-en.js` : pronoms compléments A1, prépositions de lieu A2, « Phrasal verbs du quotidien » B1, too / enough, so / such B1 ; `points2-es.js` : questions A1, l'heure et la date A1, négation A2, verbes à préposition B1). Les phrasal verbs entrent aussi dans les mots, avec leur niveau. La voix Google de ces nouvelles phrases attend la clé TTS. |
| R30 | App, exercices (25/11, capture de Pi) : le champ « Ta traduction » s'affichait avec les lettres très espacées, et les traductions propres à chaque point n'avaient pas d'explication après la vérification | Medium | ✅ Le champ remet son espacement à zéro (`letterSpacing: 0` dans `ui.tsx` et `auth.tsx`) : iOS réutilise le champ natif du code de connexion, espacé, sans le remettre à zéro. Les traductions d'un point prennent l'astuce de sa leçon comme explication (`lib/session.ts`). Tenu par `tests/session.test.js`. |

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

**Problem.** 4 familles Google Fonts. (Corrigé après vérification : Archivo sert à 7 endroits, pas seulement au chiffre des KPI et au mot du jour.)

**Impact.** Une requête et quelques dizaines de Ko en plus, qui bloquent l'affichage du texte au premier chargement.

**Recommendation.** Remplacer Archivo par Geist en gras. **Décision (2026-11-23) :** Pi garde Archivo ; coût accepté (une police de plus, chargée avec `display=swap`).

**Priority.** Low

### Mesures

- Premier chargement : environ 440 Ko (avant le 21/11 : environ 900 Ko). Le pack anglais en pèse 292 Ko non minifié (Vercel le compresse).
- `public/index.html` : 40 Ko (HTML et CSS des écrans). `public/app.js` : 81 Ko minifié.
