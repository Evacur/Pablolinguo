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
    atoms/       ce qui ne se découpe pas : button, mini, icon-button, option, pill, meter, progress, segmented, input
    molecules/   des atomes assemblés : answer-row, card, page-head, stat, step, switcher, feedback, list-row, deck, vignette, word, empty-state (+ .js)
    organisms/   une section d'écran entière : banner, flashcard, dock, tabbar, sheet, popover, toast (+ sheet.js, toast.js)
  base.css       reset et rôles de texte
  index.css      importe tout, dans l'ordre (tokens, base, atomes, molécules, organismes)
  index.js       comportements et icônes, exposés à l'app (openSheet, closeSheet, toast, emo, pic, UI.*)
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
| Bandeau | `--banner` `--banner-fg` `--banner-mute` | le bloc d'action principale, teinte pâle du violet du diable |
| Teintes | `--tint-sun` `--tint-sky` `--tint-mint` | teintes très pâles des couleurs des emojis : chiffres clés (direction « Teintes ») |
| Accents | `--confetti-1..3` `--av-*` `--media-bg` `--overlay` | fête, avatars, vidéo, voile des sheets |
| Espacements | `--sp-0-5` 2 · `--sp-1` 4 · `--sp-1-5` 6 · `--sp-2` 8 · `--sp-2-5` 10 · `--sp-3` 12 · `--sp-3-5` 14 · `--sp-4` 16 · `--sp-5` 20 · `--sp-6` 24 · `--sp-8` 32 · `--sp-10` 40 · `--sp-14` 56 | padding, margin, gap (noms et valeurs de Tailwind) |
| Rayons | `--r-xs` 4 · `--r-sm` 8 · `--r-md` 12 · `--r` 14 · `--r-lg` 20 · `--r-xl` 28 · `--r-pill` | détails, boutons, cartes, sheets, gros avatars, pastilles |
| Ombres | `--shadow` · `--shadow-pop` · `--shadow-sheet` | cartes · menus, toasts, boutons flottants · panneaux venant du bas |
| Typo | `--f-body` (Geist) · `--f-title` (Instrument Sans, `--fw-title`, `--ls-title`) · `--f-mono` | texte, titres, chiffres |
| Tailles de texte | `--fs-xs` 11 · `--fs-sm` 12 · `--fs-md` 13 · `--fs-base` 14 · `--fs-lg` 16 · `--fs-xl` 18 · `--fs-2xl` 22 | texte courant, légendes, consignes |
| Tailles d'affichage | `--fs-d1` 26 · `--fs-d2` 32 · `--fs-d3` 38 · `--fs-d4` 60 · `--fs-glyph` 72 | titres serif, gros chiffres, une lettre de l'alphabet |
| Icônes | `EMO_COL` · `PIC_COL` (`icon-colors.js`) | les seules couleurs des icônes pixel, identiques en clair et en sombre |

- 🤖 Aucune couleur en dur hors de `ui/tokens/` : ni dans `ui/`, ni dans les écrans, ni dans le code de l'app.
- 🤖 Padding, margin, gap, taille de texte, rayon et ombre viennent des tokens, dans `ui/` comme dans les écrans (y compris les `style=""` générés par le JS). Les tailles de mise en page (largeur, hauteur, position) restent libres.
- 🤖 Aucun `style=""` avec couleur, police, rayon ou ombre : seulement de la mise en page (gap, marge).
- Le thème sombre redéfinit les mêmes tokens (`:root[data-theme="dark"]`) : un composant ne teste jamais le thème.

## Composants

Dans le JS des écrans, un atome se construit avec son helper, jamais en écrivant sa classe (🤖) :
`UI.button(label, {variant: "default"|"secondary"|"ghost"|"destructive", size: "sm", attrs})`,
`UI.mini(label, {tone: "danger", as: "span", attrs})`, `UI.iconButton(icon, {label})`, `UI.pill(label, "good"|"warn"|"bad")`,
`UI.meter(valeur, max, label)`. Les helpers vivent à côté de leur CSS (`ui/components/atoms/*.js`). Le libellé est du HTML :
le texte saisi par l'utilisateur passe par `esc()` avant.

Molécules et organismes, même règle (🤖) : `UI.card(html, {cls})`, `UI.panel(html, {title, aside, fold})`, `UI.sectionTitle(titre, aside)`,
`UI.feedback("ok"|"mid"|"ko", titre, détails, {face, float})` et `UI.faceHead(visage, taille, html)`,
`UI.listRow({title, sub, lead, icon, check, trail, chevron, on, done, danger, href, as, attrs})` (la seule ligne de liste : missions,
points de grammaire, leçons, extraits, réglages) dans `UI.list(lignes, {inset, label})`,
`UI.stats([{icon, value, label}], {cls})` (chiffres clés, l'icône vient de `emo` ou `pic` ; `cls: "side"` les empile dans une colonne de côté à partir de 1000 px), `UI.steps([{title, sub, state: "done"|"now"|"next", body, attrs}])`
(un plan numéroté : l'étape « now » s'ouvre avec ses boutons, une « next » avec `attrs` devient un bouton qui l'ouvre),
`UI.switcher([{key, label, icon}], actif, {attr, label})` (le switch ovale d'un écran, repris de la pastille de navigation de Laku : chaque option montre son icône et son libellé, l'active est une capsule sombre ; sur téléphone les options se partagent la largeur, icône au-dessus du libellé),
`UI.progress(valeur, max, label, {size: "lg"})` (une barre fine pour une part d'un grand nombre ; la jauge reste pour quelques points),
`UI.deck({icon, title, value, max, tag, attrs})` dans `UI.decks([...])` (un thème de mots en tuile), `UI.vignette({icon, tint, title, trail, attrs})` dans `UI.vignettes([...])` (une image sur une couleur et son titre ; défile de côté sur téléphone, en grille dès 700 px ; `tint` : sun, sky, rose, mint, lilac), `UI.word({word, sub, tip, trail})` dans `UI.words([...])`
(un mot du vocabulaire en liste, sur deux colonnes dès 700 px), `UI.flashcard({art, tags, word, body})` (la carte d'une révision, sur sa scène de couleur ; `art` est une image au-dessus du mot) et
`UI.dock({main, alt})` (la zone d'action du bas d'une séance plein écran),
`UI.banner({face, kicker, title, sub, action})`, `UI.emptyState(titre, texte, visage)` (rien à afficher : dire ce qui manque et quoi faire),
`toast(visage, titre, texte)` (message court en bas à droite, échappé par le helper). Les icônes passent par `pic(nom, taille)`
et `emo(visage, taille)` : aucun emoji dans l'app (🤖). Le visage `devil` (violet, cornes, flammes dans les yeux) est réservé au défi de niveau.

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
| Switch ovale | `.switcher` > `.sw` | changer de contenu dans un écran (S'entraîner) ; la navigation reste la barre du bas |
| Choix segmenté | `.seg` | un choix parmi quelques-uns (`aria-pressed`) |
| Progression | `.progress` (+ `.lg`) | une part d'un grand nombre : mots appris d'un thème, avancement d'une séance |
| Thème de mots | `.decks` > `.deck` | choisir un thème à parcourir |
| Vignette | `.vignettes` > `.vignette` | proposer quelques contenus illustrés à ouvrir (situations de l'accueil) |
| Mot | `.words` > `.word` | un mot, sa traduction, son niveau et la voix |
| Carte de révision | `.flash` | la question d'une révision, centrée sur une scène de couleur (`.flash-stage`) qui prend la place que l'écran laisse |
| Zone d'action du bas | `.dock` > `.dock-main` + `.dock-alt` | bas d'une séance plein écran : le champ et l'action forte sur une ligne, deux sorties discrètes dessous |
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
- Séance plein écran (révision) : sur téléphone la hauteur suit `visualViewport` (`--vvh`), donc le champ reste collé au-dessus du clavier ;
  l'action forte fait 52 px, les sorties 44 px, le bas respecte la zone sûre, et le toast passe en haut. Dès 700 px la carte n'est pas
  étirée : une colonne centrée de 560 px, les actions juste sous la carte.
