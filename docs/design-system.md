# Design system Pablolinguo

Ce fichier fait référence pour toute interface de l'app. Un écran n'utilise que ces tokens et ces composants.
S'il en manque un, on l'ajoute ici et dans le CSS (bloc « Design system components » de `public/index.html`)
avant de s'en servir : pas de variante improvisée dans un écran.

Les règles marquées 🤖 sont vérifiées par `npm test` (`tests/design-system.test.js`).

## Tokens (`:root` dans `public/index.html`)

| Famille | Tokens | Usage |
|---|---|---|
| Couleurs de base | `--bg` `--surface` `--sunk` `--fg` `--muted` `--line` `--line2` `--inv` | fond, cartes, texte, bordures |
| États | `--good` `--warn` `--bad` + `-soft` | juste, attention, faux (texte et fond doux) |
| Bandeau | `--banner` `--banner-fg` `--banner-mute` | le bloc noir d'action principale |
| Accents | `--xp` `--confetti-1..3` `--av-*` `--media-bg` `--overlay` | XP, fête, avatars, vidéo, voile des sheets |
| Espacements | `--s1` 4 · `--s2` 8 · `--s3` 12 · `--s4` 16 · `--s5` 24 · `--s6` 32 | marges et gaps |
| Rayons | `--r-sm` 8 · `--r-md` 12 · `--r` 14 · `--r-lg` 20 · `--r-pill` | boutons, cartes, sheets, pastilles |
| Typo | `--f-body` (Geist) · `--f-title` (Instrument Serif) · `--f-mono` | texte, titres, chiffres |

- 🤖 Aucune couleur en dur dans le CSS hors des définitions de tokens.
- 🤖 Aucun `style=""` avec couleur, police, rayon ou ombre : seulement de la mise en page (gap, marge).
- Le thème sombre redéfinit les mêmes tokens (`:root[data-theme="dark"]`) : un composant ne teste jamais le thème.

## Composants

| Composant | Classe | Quand |
|---|---|---|
| Bouton principal | `.btn` | une action principale par écran ou par carte |
| Bouton secondaire | `.btn.secondary` / `.btn.ghost` | actions de second rang |
| Bouton danger | `.btn.bad` | action destructrice |
| Petit bouton | `.btn.btn-sm` | action dans un en-tête de page (ex. « + Ajouter ») |
| Pastille / filtre | `.mini` | filtres, actions tertiaires, compteurs |
| Bouton icône | `.icon-btn` / `.x-btn` | icône seule : toujours un `aria-label` |
| Carte | `.card` | un exercice, un résultat |
| Panneau | `.panel` (+ `.fold` pour un dépliable) | une section de page |
| En-tête de page | `.page-head` | titre de vue + compteur + action à droite |
| Sheet | `.sheet` + `data-sheet="nom"` / `data-sheet-close` | formulaire court : bottom sheet sur téléphone, modale centrée dès 700 px |
| Bandeau | `.banner` | l'action principale de l'écran (commencer une séance) |
| Pastille d'état | `.pill` `.p-good` `.p-warn` | Nouveau, Révision, Validée |
| Jauge | `.meter` | progression en points |

### Sheet

- Markup : `<div class="sheet" id="sheet-NOM" role="dialog" aria-modal="true" aria-labelledby="…" hidden>` avec un `.sheet-head` (titre + `.x-btn data-sheet-close`).
- Ouverture : un bouton `data-sheet="NOM"` (avec `aria-haspopup="dialog"`), ou `openSheet("NOM")`.
- Fermeture : croix, clic sur le voile, touche Échap. Le focus reste dans la sheet (Tab boucle) et revient au bouton d'origine.
- 🤖 Chaque sheet est un dialog modal étiqueté, avec un bouton de fermeture.

## Règles d'UX communes

- Chaque écran prévoit ses états : chargement, vide (un texte qui dit quoi faire), erreur (message clair + action), succès.
- Cibles tactiles d'au moins 44 × 44 px. Tout élément interactif sans texte a un `aria-label`.
- Mobile d'abord (320 px minimum), puis desktop dès 900 px. La barre d'onglets reste en bas, même sur desktop.
- Textes en français, phrases complètes, sans flèches ni jargon dans les explications : la règle en mots simples, puis pourquoi ici.
- Une seule action principale visible par écran.
