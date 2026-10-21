# Carte technique — PartouTetris
- `app/src/main/assets/engine.js` : logique indépendante du rendu, Game, pièces actives, mouvements, gravité, collision, ghost, suppression des anneaux, score et fin.
- `app/src/main/assets/index.html` : Canvas polaire, vue lunaire/pyramides, parachutes stylisés, contrôles Pointer Events, HUD et record local.
- `app/src/main/java/com/greenpower2669/partouteris/MainActivity.java` : Android WebView locale, plein écran immersif, portrait, conservation d'écran actif.
- `app/src/main/res/drawable/icon.xml` : icône vectorielle.
- `app/build.gradle`, `settings.gradle`, `build.gradle` : application Android SDK 35.
- `tests/engine.test.cjs` : tests de logique via Node.
- `.github/workflows/android-debug.yml` : exécute tests, build et copie APK brute dans `temp/` de la branche de travail.
- `ordres-de-mission.md` : missions explicites ; `todo.md` : étapes de livraison ; `debughistorical.md` : diagnostics.

- `app/src/main/assets/audio.js` : synthèse musicale offline via WebAudio avec pattern 16 temps, sons de rotation/déplacement/verrouillage/couronne/défaite, activation après geste utilisateur.
- `engine.js` : `baseFallSeconds`, `setBaseFallSeconds`, `fallInterval`, `events`, `drainEvents` pour découpler l'audio de la simulation.
- `index.html` : écran de lancement sonore, réglage vitesse 2–8 s, volumes de musique/FX, mute, préférences localStorage.
- `tests/audio.test.cjs` : pattern sonore, sécurité sans WebAudio et analyse syntaxique des scripts inline.

- `app/src/main/assets/touch.js` : contrôleur logique indépendant des Pointer Events ; un contact primaire exclusif (grip), touches secondaires courtes = rotations du même lane, seuil de déplacement et durée, remise à zéro à la pause/perte de focus.
- `app/src/main/assets/index.html` : adapte les Pointer Events à TwoHandControls, pointage et halo de prise ; `tests/touch.test.cjs` : tests d'interactions à deux mains (tap gauche, drag droite, faux gestes, relâchement, changement de front).

- PT-005 : `engine.js` `canPlace()` ignore les autres blocs actifs ; `landingRadius()` corrige un chevauchement éventuel uniquement au verrouillage. `tests/engine.test.cjs` vérifie les croisements en vol, le raccord angulaire et les atterrissages synchronisés.
- PT-006 : `app/src/main/assets/visuals.js` est le moteur visuel procédural Canvas 2D ; `index.html` lui délègue le fond, la Lune, les cellules, les parachutes, les impulsions énergétiques. Rendu hors ligne.

- PT-007 : `app/src/main/assets/layout.js` calcule un plateau portrait borné entre HUD et dock bas. `index.html` intègre emblème SVG des trois pyramides à côté du titre, commandes en grille 2 lignes ; `visuals.js` conserve une Lune à cratères sans pyramides. `AndroidManifest.xml` et `MainActivity.java` forcent le mode portrait. `tests/portrait.test.cjs` garantit orientation et espacements portrait.

- PT-008 : engine.js award et événements points/ring/milestone ; celebrations.js gère float +40, bulles/disco/feux ; index.html ajoute scoreBurst transparent, mode doux et score lisible ; audio.js fanfare originale. Tests celebrations.test.cjs, engine.test.cjs et audio.test.cjs.

- NOM : PartouTetris (dépôt greenpower2669/PartouTetris) ; garder ancien package Android interne com.greenpower2669.partouteris.
- PT-009 `engine.js` -> placementReward() contacts polaires distincts, rayon moyen, xN ; `touch.js` -> tick(), 420ms deuxième doigt, boosts combinés ; `layout.js` -> Terre agrandie réservée, `visuals.js` -> Terre plus belle, `celebrations.js` + `index.html` -> origine terrestre des particules/faisceaux.
- Tests PT-009 `tests/engine.test.cjs`, `tests/touch.test.cjs`, `tests/portrait.test.cjs`, `tests/celebrations.test.cjs`.

- PT-010 : `app/src/main/assets/leaderboard.js` localStorage pseudo/records (ancienne clé record conservée), top 10 persisté, top 3 affiché, assainissement des noms ; `tests/leaderboard.test.cjs`.
- PT-010 : `index.html` HUD score sur largeur, podium sous score, pointFeed bas, formulaire pseudo, bouton de mode LASER, visée de pièce et tir rendu en Canvas ; `engine.js` `laser()` pour impact réorientant avec vérifications de collision ; `visuals.js` `incoming()` flammes et `laser()` faisceau Terre-pièce ; `audio.js` effet laser, `celebrations.js` points flottants en bas.

- PT-011 : icône utilisateur : `app/src/main/res/drawable-nodpi/icon.webp` Android et `app/src/main/assets/brand-icon.webp` titre, depuis l'image originale fournie par Fab ; l'ancien `drawable/icon.xml` ne doit plus être utilisé. `engine.js` SPACE_STEPS=4 pour l'approche spatiale ; `visuals.js` cellules lumineuses hors anneaux, flame trails uniquement avant la Lune, zero parachute, `satelliteOrigins` et `satellites` pour 3 émetteurs. `index.html` trois rayons convergents vers une cible et emblème officiel. `tests/visuals.test.cjs` et `tests/engine.test.cjs` testent rendu et phase.

- PT-012 (0.1.9) : `visuals.js` `shouldDeployCanopy(radial,RINGS)` borne strictement les voiles à la zone de grille ; `Artist.canopy()` voile légère cyan/or (petit gabarit, câble fin, transparent) ; `Artist.satellites()` coque pyramidale à facettes dorées, anneau moteur cyan, toujours 3 émetteurs. `index.html` appelle canopy pour les seules pièces actives r<10 et conserve les flammes hors de la Lune. Tests dans `tests/visuals.test.cjs` et `tests/portrait.test.cjs`.

- PT-013 / 0.2.0 : `design/charte-officielle.png` = référence PNG originale de Fab (hors rendu temps réel), `app/src/main/assets/official-theme.mp3` = piste officielle locale reprise depuis le blob `main` sans réencodage.
- `audio.js` = HTMLAudioElement (loop, activation geste, pause/mute, volumes) avec fallback musical WebAudio exclusif et FX laser synthétique multi-phase.
- `visuals.js` = nébuleuses, anneaux cyan/or, tracé de charge des 3 satellites, faisceaux/impacts Canvas. `index.html` = thème HUD doré, tutoriel tactile corrigé, synchronisation de charge et laser. `tests/pt013.test.cjs` = intégrité de l'import et séparation graphique/audio.

- PT-013 : `layout.js` réserve une Terre basse à fort diamètre ; `Artist.makeEarthTexture()` précalcule le globe hors écran, `satelliteOrigins` déploie les trois satellites sur l'horizon. `index.html` centre le logo or et dispose cinq boutons sur une rangée, LASER supplémentaire. `design/charte-apercu.jpg` = source; `design/rendu-jeu-apercu.jpg` = instantané CI optionnel.

- PT-014 : `index.html` héberge désormais `#pointFeed` et `#scoreAnnouncement` **dans `#hud .scoreboard`**, sans flottement Canvas. `Festival` dans `celebrations.js` reçoit `bannerHost` et `gainHost` ; petit gain temporaire géré par `floatScore`, scène temporaire par `show/stop` et réinitialisation par `reset`. `#scoreBurst` ne garde que les particules décoratives passantes. `tests/celebrations.test.cjs` couvre confinement, simultanéité et nettoyage. Aucune modification des clés de sauvegarde.

- PT-015 : `leaderboard.js` DEFAULT_NICKNAME « Tous3nKamion », migration conditionnelle `raw.name === "PHARAON"`; clés `KEY`/`PREVIOUS_RECORD` et `scores` inchangées. `index.html` label Pharaonite, pseudo au HUD et placeholder ; `tests/leaderboard.test.cjs` vérifie migration sans pertes.
