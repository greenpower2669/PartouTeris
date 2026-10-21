# 🌙 PartouTetris — Les Pharaons de la Lune

## Prototype Android 0.2.2 — PT-014 : annonces hors plateau, musique officielle

**Branche :** `feature/lunar-four-fronts-001` — `main` conservée intacte.

### 📲 APK Android direct (sans ZIP)

**[Télécharger PartouTetris-v0.2.2-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTetris/feature/lunar-four-fronts-001/temp/PartouTetris-v0.2.2-debug.apk)**

APK debug compilé par [GitHub Actions](https://github.com/greenpower2669/PartouTetris/actions), directement installable sur Android ; AAB de publication seulement après validation de Fab.

### Visuels et règles

La charte graphique déposée par Fab sur `main` est copiée à l'identique dans `design/charte-officielle.png`. Miniature pour contrôle : `design/charte-apercu.jpg`.

Rendu dynamique Canvas et DOM : titre doré, score géant, couronnes cyan/or, Lune géologique sans pyramides, quatre fronts et débris incandescents venant de l'espace, voiles légères seulement en zone lunaire, grande Terre texturée en bas, trois satellites pyramidaux, lasers convergents, cinq boutons en bas et icône officielle. La fidélité finale à la charte est **encore à valider à l'écran**.

Gestes préservés : main droite maintenue pour attraper et déplacer ; main gauche tap bref pour rotation 90°, appui long pour descente accélérée. Mode Laser et commandes alternatives maintenus. Gameplay, collisions aériennes non bloquantes, scores, couronnes 360°, records, pseudo et paramètres conservés.

### Audio

Musique officielle fournie dans `main`, copiée octet par octet dans `app/src/main/assets/official-theme.mp3`. Lecture après interaction, volume indépendant/mute sauvegardés, répétition en boucle, secours musical synthétique WebAudio sans superposition. Laser synthétique multi-phase (activation, plasma, départ, impact).

Catalogue Djipie consulté : aucun son privé recopié dans le dépôt public faute de droits de redistribution vérifiés par ressource.

### Tests et validation

Tests Node : `node --test tests/*.test.cjs`. Compilation APK : `gradle :app:assembleDebug`. Workflow `.github/workflows/android-debug.yml` ; apk brute en `temp/`.

À vérifier réellement sur **Samsung SM-A576B, Android 16** : fidélité du visuel, rendu du plateau, performance de la Terre précalculée, multitouch, volume et écoute complète de la musique, éventuel raccord audible de boucle, laser et vibrations.

Package interne `com.greenpower2669.partouteris` inchangé pour préserver les sauvegardes. Pas de Release ni fusion vers `main` sans autorisation de Fab.

### PT-014 — Annonces de score
Les messages « 20 000 POINTS ! », couronnes et combos apparaissent dans le panneau des scores supérieur, sur le podium temporairement remplacé, tandis que le petit gain se positionne à côté de « MEILLEURS SCORES ». Aucun texte de points sur la Lune, ni au bas des anneaux. La musique MP3 locale reste en boucle et les préférences existantes sont conservées.

### PT-015 — Pseudo Tous3nKamion
Le titre du classement est désormais « MEILLEUR SCORE DE PHARAONITE ». Le pseudo par défaut « Tous3nKamion » (Toutânkhamon) reste modifiable dans Réglages. Les anciens scores et autres pseudos ne changent pas ; seule l'ancienne valeur de défaut « PHARAON » est remplacée à la lecture.
