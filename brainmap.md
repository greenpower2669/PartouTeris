# Carte technique — PartouTeris
- `app/src/main/assets/engine.js` : logique indépendante du rendu, Game, pièces actives, mouvements, gravité, collision, ghost, suppression des anneaux, score et fin.
- `app/src/main/assets/index.html` : Canvas polaire, vue lunaire/pyramides, parachutes stylisés, contrôles Pointer Events, HUD et record local.
- `app/src/main/java/com/greenpower2669/partouteris/MainActivity.java` : Android WebView locale, plein écran immersif, paysage, conservation d'écran actif.
- `app/src/main/res/drawable/icon.xml` : icône vectorielle.
- `app/build.gradle`, `settings.gradle`, `build.gradle` : application Android SDK 35.
- `tests/engine.test.cjs` : tests de logique via Node.
- `.github/workflows/android-debug.yml` : exécute tests, build et copie APK brute dans `temp/` de la branche de travail.
- `ordres-de-mission.md` : missions explicites ; `todo.md` : étapes de livraison ; `debughistorical.md` : diagnostics.

- `app/src/main/assets/audio.js` : synthèse musicale offline via WebAudio avec pattern 16 temps, sons de rotation/déplacement/verrouillage/couronne/défaite, activation après geste utilisateur.
- `engine.js` : `baseFallSeconds`, `setBaseFallSeconds`, `fallInterval`, `events`, `drainEvents` pour découpler l'audio de la simulation.
- `index.html` : écran de lancement sonore, réglage vitesse 2–8 s, volumes de musique/FX, mute, préférences localStorage.
- `tests/audio.test.cjs` : pattern sonore, sécurité sans WebAudio et analyse syntaxique des scripts inline.
