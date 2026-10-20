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
- [ ] Valider compilation 0.1.1 et existence APK direct, puis tester son réellement sur Android 16.
- [ ] Selon retour Fab, enrichir FX pharaons/pyramides avec les ressources partagées (sans créer de dépendance obligatoire).
- [x] Adapter le test de gravité à la nouvelle durée (ancienne hypothèse 0,82 s incompatible avec 5 s).
