# 🌙 PartouTetris — Les Pharaons de la Lune

## Android 0.1.7 — HUD de score, podium, étoiles en feu, lasers et pseudo

**PT-010 / demande Fab :** « les point afficher plus bas il y a de la place et aussi les voir arriverbdenl espace en flammes et pouvoirs lancer des laser dessus pour les orienter aussi en haut le score doit prendre toute la place et en dessous les highscore, dans des options permettre de modifier un pseudo ».

### Ce qui change
- Score **très grand, sur toute la largeur** du bandeau supérieur, en dessous du petit titre avec les pyramides. Le **podium des trois meilleurs scores locaux** se trouve immédiatement dessous, avec pseudo et valeur.
- Les petits bonus de placement (+points ×multiplicateur) apparaissent **plus bas, à gauche de la Terre**, dans la bande libre sous le jeu. Un petit panneau permanent « GAIN » rappelle le dernier bonus.
- Classement mémorisé sur le téléphone dans `partoutetris-leaderboard-v1`, limité aux dix meilleures parties (trois affichées à l'écran). Le record historique de `partouteris-record` est repris comme « ANCIEN RECORD » sans le perdre ; nouveaux classements ajoutés après un game-over réel.
- Pseudo personnalisable sous **⚙ RÉGLAGES > Pseudo du joueur**, 16 caractères maximum, enregistré en mémoire locale, sans compte ni Internet.
- Les débris arrivant de l'espace ont désormais **des traînées brûlantes** (jaune/orange/rouge), s'atténuant près de la Lune, sans flash stroboscopique. Les quatre chutes restent simultanées et non solides entre elles tant que les pièces volent.
- Nouveau bouton **⚡ LASER** pour activer/désactiver la visée : toucher ensuite une pièce descendante pour tirer un rayon énergétique depuis la **Terre**. Un impact central fait pivoter la pièce de 90° ; toucher un côté pousse aussi d'un secteur dans le sens opposé à l'impact si libre. Un tir n'ignore jamais les collisions avec les blocs posés. Le mode laser est séparé du contrôle traditionnel à deux mains.
- Tirs plafonnés à un toutes les 420 ms ; laser et impacts visibles, petit son dédié à volume réglable ; mouvement réduit respecte le paramètre « Effets visuels doux ».
- Portrait verrouillé, Terre agrandie, musique synthétisée, profondeur/contact scorés, surnoms et records préservés.

### Livraison
L'APK debug brute est disponible après réussite CI GitHub Actions :
[PartouTetris-v0.1.7-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTetris/feature/lunar-four-fronts-001/temp/PartouTetris-v0.1.7-debug.apk).

Contrôle de qualité : `node --test tests/*.test.cjs` puis `gradle :app:assembleDebug`. Tests sur smartphone Android 16 recommandés.

### Préservation
- **Branche :** `feature/lunar-four-fronts-001`. Aucune fusion dans `main` ou publication Release sans validation explicite.
- **Package Android :** `com.greenpower2669.partouteris` inchangé pour préserver la mise à jour et les préférences existantes.
- **Clé de configuration historique** `partouteris-audio-and-speed-v1` conservée.
- Aucun fichier audio privé Djipie ajouté.
