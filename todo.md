# TODO — PartouTeris
- [x] Identifier le vrai dépôt `greenpower2669/PartouTeris` et lire son état.
- [x] Créer la branche `feature/lunar-four-fronts-001` sans modifier main.
- [x] Implémenter grille polaire et quatre pièces simultanées.
- [x] Ajouter commandes tactiles, ghosts, graphismes provisoires, score, pause.
- [x] Préparer l'application Android et son icône.
- [x] Ajouter tests Node et workflow de génération d'APK directe.
- [x] Build et tests verts : GitHub Actions run 39504100261 ; APK direct vérifié (16 005 octets) dans `temp/PartouTeris-v0.1.0-debug.apk`.
- [ ] Tester l'APK sur SM-A576B Android 16, ajuster contrôle/police/contraste selon retour Fab.
- [ ] Valider les règles de concurrence de pièces sur la frontière de deux cadrans.
- [ ] Ajouter les FX sonores, animations pyramidales, aides tactiles réglables et réglages d'accessibilité.
- [ ] Valider avec Fab le package Android avant toute publication Play Store ; AAB signé plus tard.
- [ ] Ne pas fusionner main ou publier de Release définitive sans validation explicite.

## PT-003 — Descente/audio 0.1.1
- [x] Ralentir la chute initiale et ajouter contrôle de vitesse sauvegardé.
- [x] Produire une musique de fond synthétique originale sans accès réseau.
- [x] Effets rotation, déplacement, collision, couronne, game over ; volumes indépendants et mute.
- [x] Déclenchement WebAudio après un geste de démarrage explicite.
- [x] Tests et compilation APK 0.1.1 validés par GitHub Actions #39509803472 ; fichier brut `temp/PartouTeris-v0.1.1-debug.apk` vérifié (20 206 octets).
- [ ] Tester la nouvelle vitesse et l'audio réellement sur SM-A576B Android 16.
- [ ] Selon retour Fab, enrichir FX pharaons/pyramides avec les ressources partagées (sans créer de dépendance obligatoire).
- [x] Adapter le test de gravité à la nouvelle durée (ancienne hypothèse 0,82 s incompatible avec 5 s).

## PT-004 — Tactile à deux mains
- [x] Attraper et guider d'une main pendant que l'autre tapote pour pivoter la pièce tenue.
- [x] Bloquer les rotations accidentelles sur glissement/maintien du second doigt et relâchement du doigt principal.
- [x] Préserver commandes alternatives, pause, son et sauvegardes.
- [x] Ajouter six scénarios de test sur les deux doigts.
- [x] Build et tests verts dans GitHub Actions #39513900116 ; APK directe vérifiée : `temp/PartouTeris-v0.1.2-debug.apk` (21 283 octets).
- [ ] Confirmer ressenti et multitouch réel sur SM-A576B Android 16, puis ajuster seuils si nécessaire.

## PT-005 et PT-006 — Version 0.1.3
- [x] Retirer les collisions entre pièces aériennes, sans supprimer les collisions sol/blocs verrouillés.
- [x] Déterminiser les poses synchronisées et empêcher l'écrasement de blocs.
- [x] Ajouter tests moteur pour croisements, contact et débordement.
- [x] Refaire les décors lunaires et pyramides, les cellules, les voiles, les halos et le HUD en rendu procédural.
- [x] GitHub Actions #39517259972 : tests Node et build Android réussis ; APK brute vérifiée dans `temp/PartouTeris-v0.1.3-debug.apk` (25 278 octets).
- [ ] Valider qualité, lisibilité et cadence sur Samsung SM-A576B.
- [ ] Enrichir textures/sons et affiner les effets suivant le ressenti Fab, sans changer le concept.

## PT-007 — Portrait et titre
- [x] Verrouiller Android en portrait via manifeste et activité.
- [x] Adapter géométrie lunaire au rectangle central libre.
- [x] Réorganiser les cinq boutons en deux rangées sans recouvrir le jeu.
- [x] Déplacer les pyramides près du titre et nettoyer la texture lunaire.
- [x] Ajouter tests Node orientation et géométrie aux tailles portrait.
- [x] CI GitHub Actions #39518335994 réussie (tests Node + compilation Android) ; APK directe vérifiée `temp/PartouTeris-v0.1.4-debug.apk` (26 736 octets).
- [ ] Valider visuellement sur SM-A576B Android 16 avec une nouvelle capture.

## PT-008 — Score et célébrations 0.1.5
- [x] Récompenser pièces posées, couronnes et combos réels.
- [x] Afficher +40 flottants, bulles et projecteurs sur couronnes.
- [x] Boule à facettes aux doubles couronnes et feux d'artifice à chaque 1000 points.
- [x] Fanfare WebAudio indépendante du fond musical, mode visuel doux.
- [x] Préserver portrait, quatre chutes, tactile 2 mains, sauvegardes.
- [x] Ajouter tests des scores, seuils et animations.
- [ ] Vérifier CI/APK directe 0.1.5 ; tester réellement sur Android 16.
