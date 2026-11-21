# Design system Pablolinguo

Ce fichier fait référence pour toute interface de l'app. Un écran n'utilise que ces tokens et ces composants.
S'il en manque un, on l'ajoute dans `ui/` (et ici) avant de s'en servir : pas de variante improvisée dans un écran.

Les règles marquées 🤖 sont vérifiées par `npm test` (`tests/design-system.test.js`).

## Structure

```
ui/
  tokens/        colors · typography · spacing · radius · shadows · motion (.css) · icon-colors (.js)
  icons/         emoticons.js (emo) · pixel-icons.js (pic)
  components/
    atoms/       ce qui ne se découpe pas : button, mini, icon-button, chip, pill, meter, segmented, input
    molecules/   des atomes assemblés : answer-row, card, page-head, stat
    organisms/   une section d'écran entière : banner, tabbar, sheet (+ sheet.js)
  base.css       reset et rôles de texte
  index.css      importe tout, dans l'ordre (tokens, base, atomes, molécules, organismes)
  index.js       comportements et icônes, exposés à l'app (openSheet, closeSheet, emo, pic)
public/ui.html   le catalogue : chaque composant dans ses variantes, en clair et en sombre (/ui.html)
```

`npm run build` assemble `ui/` en `public/ui.css` et `public/ui.js` (fichiers générés, non versionnés).
Le bloc `<style>` de `public/index.html` ne garde que la mise en page propre aux écrans.

- 🤖 Un composant est rangé dans atoms, molecules ou organisms, importé par `ui/index.css` et présent dans le catalogue.
- 🤖 Un niveau n'importe que le sien ou ceux d'en dessous.
- 🤖 Un écran ne redéfinit ni un token ni la classe d'un composant : il l'étend dans `ui/`.
- 🤖 L'app ne dessine pas d'icône et ne redéfinit pas `emo`, `pic` ni la sheet.
- Variantes nommées comme shadcn quand c'est possible (default, secondary, ghost, destructive = `.bad`, taille `sm`), pour qu'un passage à React reste simple.

## Tokens (`ui/tokens/`)

| Famille | Tokens | Usage |
|---|---|---|
| Couleurs de base | `--bg` `--surface` `--sunk` `--fg` `--muted` `--line` `--line2` `--inv` | fond, cartes, texte, bordures |
| États | `--good` `--warn` `--bad` + `-soft` | juste, attention, faux (texte et fond doux) |
| Bandeau | `--banner` `--banner-fg` `--banner-mute` | le bloc noir d'action principale |
| Accents | `--xp` `--confetti-1..3` `--av-*` `--media-bg` `--overlay` | XP, fête, avatars, vidéo, voile des sheets |
| Espacements | `--s1` 4 · `--s2` 8 · `--s3` 12 · `--s4` 16 · `--s5` 24 · `--s6` 32 | marges et gaps |
| Rayons | `--r-sm` 8 · `--r-md` 12 · `--r` 14 · `--r-lg` 20 · `--r-pill` | boutons, cartes, sheets, pastilles |
| Typo | `--f-body` (Geist) · `--f-title` (Instrument Serif) · `--f-mono` | texte, titres, chiffres |
| Icônes | `EMO_COL` · `PIC_COL` (`icon-colors.js`) | les seules couleurs des icônes pixel, identiques en clair et en sombre |

- 🤖 Aucune couleur en dur hors de `ui/tokens/` : ni dans `ui/`, ni dans les écrans, ni dans le code de l'app.
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
| Ligne de réponse | `.answer-row` | un champ et son bouton sur une ligne |
| Carte | `.card` | un exercice, un résultat |
| Panneau | `.panel` (+ `.fold` pour un dépliable) | une section de page |
| En-tête de page | `.page-head` | titre de vue + compteur + action à droite |
| Sheet | `.sheet` + `data-sheet="nom"` / `data-sheet-close` | formulaire court : bottom sheet sur téléphone, modale centrée dès 700 px |
| KPI | `.stats` > `.stat` (`.v` + `.label`) | un chiffre clé et sa légende |
| Bandeau | `.banner` | l'action principale de l'écran (commencer une séance) |
| Barre d'onglets | `.tabbar` | navigation principale, en bas sur toutes les tailles |
| Choix segmenté | `.seg` | un choix parmi quelques-uns (`aria-pressed`) |
| Chip | `.chip` | un fait court ou un filtre |
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
