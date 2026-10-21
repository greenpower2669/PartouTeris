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

- CI premier essai 0.1.1 : 14 tests / 15, échec d'un ancien test qui attendait une chute après seulement 1,08 s. Contrat modifié : 5 s/étage ; test corrigé pour vérifier l'absence de chute à 1,08 s et une chute après 5 s. Ce n'était pas une panne moteur.

- Correction complémentaire : un toucher ne doit pas remettre l'horloge musicale à zéro ; test mock WebAudio ajouté.
- CI finale 0.1.1 #39509803472 : tests Node et build Android réussis, fichier `temp/PartouTeris-v0.1.1-debug.apk` confirmé (20 206 octets). Un build intermédiaire a échoué uniquement lors du push de l'APK à cause de builds parallèles ; le dernier a réussi.
- Audio réel sur téléphone toujours **à valider**, pas de conclusion tirée du simple build.

## PT-004 — Retour ergonomique, 21/10/2026
- Observation : le geste de rotation sur un tap du doigt principal obligeait à lâcher le contrôle. Fab préfère attraper/déplacer de la droite tout en tapotant de la gauche pour pivoter.
- Changement : `touch.js` garde le doigt primaire responsable de la prise et donne aux taps rapides d'un autre doigt la seule commande de rotation. Un contact secondaire ne sélectionne plus un autre front. Les gestes secondaires glissés, longs ou annulés ne pivotent pas ; si la prise se termine avant le tap, celui-ci est annulé.
- À vérifier sur téléphone : double tactile WebView Samsung, sensibilité des 26 px / 360 ms, possibilité de manipuler les quatre cadrans sur écran paysage.

- Vérification livraison PT-004 : GitHub Actions #39513900116 réussie, compilation Android et tests Node verts ; `temp/PartouTeris-v0.1.2-debug.apk` confirmée (21 283 octets). Essai humain non encore effectué.

## PT-005/PT-006 — 21/10/2026
- Bug rapporté par Fab : les pièces sous parachute se bloquent mutuellement **en l'air** ; cause confirmée par lecture : `canPlace()` comparait chaque case aux quatre pièces actives, ce qui gelait leur descente.
- Correctif : `canPlace()` ignore les pièces aériennes et consulte seulement les blocs définitivement posés ; `landingRadius()` résout les arrivées concurrentes avant écriture sur le plateau et ne permet plus d'écrasement.
- Visuel : rendu Canvas initial trop minimal (petite Lune, arcs unis, parachute filaire) ; remplacé par art procédural hors ligne, cratères/pyramides ombrés, cellules réfléchissantes et HUD métallique.
- Tests CI et performances/ergonomie Android réelles restent à vérifier.

- Preuve technique PT-005/PT-006 : GitHub Actions #39517259972 réussie (tests Node, compilation Android, copie Git du fichier). APK `temp/PartouTeris-v0.1.3-debug.apk` vérifiée, 25 278 octets. Les rendus sur appareil ne sont pas encore observés.

## PT-007 — Capture paysage 0.1.3 (21/10/2026)
- Problème constaté sur la capture fournie : plateau immense en paysage, fond du cercle caché sous les cinq boutons horizontaux ; pyramides posées sur la Lune alors que Fab les veut près du titre.
- Résolution : portrait Android forcé, mise en page HUD/cercle/commandes en trois zones avec bornes calculées depuis les rectangles DOM. Pyramides en icône SVG près du titre, cratères lunaires laissés libres.
- Risques à confirmer sur Samsung : taille réelle des boutons, zones tactiles et disponibilité de l'espace pour les quatre voiles en portrait.

- CI PT-007 : run #39518335994 **success**, tests Node, build Android et publication APK brute de 26 736 octets dans `temp/PartouTeris-v0.1.4-debug.apk`. Aucune fusion `main` ; capture réelle du mode portrait en attente.

## PT-008 — Récompenses (21 octobre 2026)
- Lacune 0.1.4 : aucun score au placement ; célébrations trop rares.
- Correctif : points calculés uniquement à la pose solide (+40), combo de couronnes réelles, palier 1000 détecté une seule fois même en cas de jackpot.
- Scènes inspirées de Block Boost, mais synthèse graphique/sonore autonome ; pas de fichiers audio privés.
- Animation limitée, option douce, pas de stroboscope et overlay pointer-events:none. Tests et rendu réel sur Samsung à confirmer.

- Livraison 0.1.5 vérifiée : GitHub Actions #39521425766 success (tests et Gradle), fichier brut temp/PartouTeris-v0.1.5-debug.apk : 31 036 octets. Aucune fusion main ; démonstration visuelle et audio réelle à vérifier sur téléphone.
