# 🌙 PartouTeris — Les Pharaons de la Lune

Jeu de Tetris polaire sur quatre fronts simultanés ; effacer les couronnes continues à 360°.

## Prototype Android 0.1.2 : contrôle naturel à deux mains

**Nouvelle commande par défaut :** pose et maintiens un doigt de la main droite sur la pièce/cadran à déplacer ; glisse pour la guider tangentiellement. **Sans relever la main droite, tapote l'écran avec un doigt de la main gauche** pour pivoter cette même pièce d'un quart de tour à chaque tapotement.

- La seconde main ne vole pas la sélection : elle pilote uniquement la rotation de la pièce tenue.
- Les contacts secondaires longs ou glissés ne tournent pas la pièce ; un simple relâchement de la main droite ne déclenche plus de rotation inattendue.
- Main droite glissée vers le centre : accélérer. Relâcher : retrouver la chute normale.
- Bouton « ↻ TOURNER » toujours disponible pour jouer à une main ou en accessibilité.
- Sélection visuelle renforcée par un halo pendant la prise.
- Les quatre pièces continuent de tomber indépendamment.
- Descente douce, 5 s/étage au départ ; réglage 2–8 s sauvegardé.
- Musique et effets électroniques originaux hors ligne ; activation après « JOUER AVEC LE SON » ; curseurs de volume et mute.
- Test automatique dédié au contrôle à deux doigts `tests/touch.test.cjs`.

**APK directement installable** (après vérification du build Actions) :
[PartouTeris-v0.1.2-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.2-debug.apk).

Code sur `feature/lunar-four-fronts-001`, `main` intacte. Package provisoire `com.greenpower2669.partouteris` (ne pas modifier sans accord avant publication). MIT.

Vérification : `node --test tests/*.test.cjs` et `gradle :app:assembleDebug`.
