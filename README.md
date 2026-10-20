# 🌙 PartouTeris — Les Pharaons de la Lune

Quatre fronts de blocs tombent autour d'une Lune circulaire. Remplir 360° d'une couronne pour l'effacer !

## Prototype Android 0.1.1 — rythme et ambiance
- Descente **nettement ralentie** : 5 secondes par niveau radial au début (contre 0,82 seconde dans la 0.1.0), et accélération progressive plus douce.
- Réglage de vitesse : **2 à 8 secondes** par étage radial, sauvegardé sur le téléphone.
- Musique électronique égyptienne et effets de manipulation, impact, anneau terminé et fin de partie **synthétisés localement** avec WebAudio, sans réseau ni assets externes.
- Volume de musique et volume d'effets réglables indépendamment, bouton muet.
- **L'audio Android demande un geste utilisateur :** appuyer sur « ▶ JOUER AVEC LE SON » au démarrage.
- Les 4 chutes continuent en parallèle, les prévisualisations fantômes, les rotations, les contrôles tactiles et le score restent présents.
- Icône, plein écran, compatibilité hors ligne.

**APK de test :** [PartouTeris-v0.1.1-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.1-debug.apk) (accessible uniquement une fois le build CI réussi).

**Contrôle automatique :** `node --test tests/*.test.cjs`, puis `gradle :app:assembleDebug`.

**Package provisoire** `com.greenpower2669.partouteris`. Branche `feature/lunar-four-fronts-001`. Ne pas fusionner dans `main` sans accord de Fab.

## Retours de tests attendus
- Entendre la musique dès « JOUER AVEC LE SON » sur Samsung SM-A576B Android 16.
- Régler la vitesse et les volumes. Vérifier la fluidité, le toucher et les sons non fatigants.
- Vérifier la lecture WebAudio (qui dépend de la WebView installée) et les sons après pause/reprise.
