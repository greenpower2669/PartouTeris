# Débogage — PartouTeris
## PT-001, 20/10/2026
- Dépôt neuf, seuls README et LICENSE présents lors de l'audit.
- Problèmes à vérifier en conditions réelles : maniabilité sur écran tactile Android, collisions au raccord 0°/360°, simultanéité de plusieurs contacts, comportement de WebView Android 16, performance Canvas et signature APK debug.
- Vérifications initiales : tests purs du moteur (sans Android) exécutés pendant le développement.
- CI initiale : `android-actions/setup-android@v3` a échoué sur `sdkmanager tools` (package obsolète). Contournement initial par appel direct `sdkmanager` ensuite en échec, commande absente du PATH.
- Correctif vérifié : localisation de `sdkmanager` dans `$ANDROID_HOME/cmdline-tools/` du runner, puis installation SDK 35.
- Preuve : run GitHub Actions #39504100261 **success**, avec tests Node, compilation Android, upload artifact et copie directe APK dans `temp/`.
- Reste non testé : installation et contrôles réels sur Android 16 / SM-A576B.

## PT-003 — Retour téléphone, 21/10/2026
- Symptôme confirmé par Fab : quatre descentes trop rapides ; aucun son et ambiance peu vivante.
- Cause de vitesse dans la 0.1.0 : intervalle initial codé à 0,82 seconde par case radiale, avec quatre fronts simultanés : trop peu de temps de décision.
- Correction de code 0.1.1 : intervalle initial 5,0 secondes (réglable 2–8 s), palier de progression tempéré, FX et musique WebAudio originaux.
- Risque à tester : WebAudio nécessite un geste Android ; activé par écran de démarrage explicite. Performance et volumes réels à vérifier.
