# 🌙 PartouTeris — Les Pharaons de la Lune

Jeu de blocs orbital sur **quatre fronts simultanés**. La Lune possède une grille continue de 48 secteurs et 10 couronnes concentriques. Quatre pièces descendent indépendamment depuis le nord, l'est, le sud et l'ouest. Le joueur les oriente et déplace tangentiellement pour compléter une couronne de 360°, la faire disparaître et gagner des points.

## Prototype Android 0.1.0
- Jeu jouable hors ligne dans une WebView locale Android (aucune autorisation Internet).
- Quatre chutes parallèles, rotations de 90°, ghost, collisions, accélération, score et record local.
- Fond lunaire égyptien futuriste vectoriel, icône de l'application, mode paysage immersif.
- Appuyer sur un cadran puis glisser autour de la Lune pour décaler la pièce ; taper pour tourner ; glisser vers le centre pour accélérer. Boutons de rotation et chute disponibles.
- Actions GitHub : tests Node, compilation APK debug Android et dépôt du fichier décompressé dans `temp/` sur la branche de travail.

**Package provisoire :** `com.greenpower2669.partouteris` (à valider avant toute publication Play Store).

### Développement
```bash
node --test tests/*.test.cjs
gradle :app:assembleDebug
```
Ouvrir `app/src/main/assets/index.html` dans un navigateur récent permet aussi une prévisualisation locale du gameplay. Android compile avec Gradle 8.9, plugin Android 8.7.3 et SDK 35.

Aucune publication ni fusion vers `main` sans validation explicite.

### 📱 APK de test directement installable

[PartouTeris-v0.1.0-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.0-debug.apk) — générée et vérifiée par [GitHub Actions #39504100261](https://github.com/greenpower2669/PartouTeris/actions/runs/39504100261), APK debug (pas une AAB Play Store). Télécharger le fichier `.apk` sans ZIP.

**À valider :** confort tactile/ergonomique, rendu et fluidité sur Samsung SM-A576B Android 16.