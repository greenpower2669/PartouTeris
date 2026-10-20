# 🌙 PartouTeris — Les Pharaons de la Lune

## Android 0.1.4 — portrait verrouillé et pyramides en haut

**Demande utilisateur :** afficher le jeu en **portrait fixe** et déplacer les pyramides de la surface lunaire près du titre en haut.

### Interface portrait
- L'activité Android est verrouillée sur `portrait` (et non `sensorLandscape`). Une demande explicite `SCREEN_ORIENTATION_PORTRAIT` est appliquée au démarrage.
- Grille et Lune recalculées automatiquement dans la bande libre entre le HUD supérieur et les commandes inférieures ; le plateau ne doit plus passer derrière les boutons.
- Contrôles toujours disponibles à deux mains, avec cinq boutons répartis sur deux rangées adaptées au téléphone.
- Instructions courtes dans un panneau distinct au-dessus des boutons ; N/E/S/O abrégés.
- **Les trois pyramides dorées** sont maintenant une emblème vectorielle à côté du titre `PARTOUTERIS` ; les pyramides ont été retirées de la texture de la Lune, dont les cratères restent visibles.
- Préserve : quatre chutes simultanées, traversée libre dans les airs, poses solides au sol, vitesse réglable, musique et volumes, records locaux, pause.

### Installation Android
Fichier APK direct (non ZIP) disponible après compilation :
[PartouTeris-v0.1.4-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.4-debug.apk)

Package `com.greenpower2669.partouteris` inchangé et provisoire. Branche `feature/lunar-four-fronts-001`, aucune fusion dans `main` sans approbation.

`node --test tests/*.test.cjs` ; `gradle :app:assembleDebug`.
