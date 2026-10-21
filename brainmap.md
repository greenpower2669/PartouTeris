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
