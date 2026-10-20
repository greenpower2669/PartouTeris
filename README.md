# 🌙 PartouTeris — Les Pharaons de la Lune

## Android v0.1.3 — Physique aérienne & habillage lunaire

Le jeu conserve **quatre pièces simultanées**, la prise tactile avec main droite et rotation à tapotements main gauche, la musique synthétisée et la descente douce.

### PT-005 — Terrain solide, ciel libre
- Les pièces **encore en vol** ne se bloquent et ne se poussent pas mutuellement ; elles peuvent se traverser.
- Seules les cases du plateau déjà verrouillées et la Lune sont solides.
- Au contact, le verrouillage est déterministe dans l'ordre des quatre voies. Une pièce arrivant dans une case verrouillée au même instant est repoussée vers la couche externe légale, sans écraser les cases existantes.
- Débordement orbital réel si aucune place n'est libre, sans arrêt suspendu au milieu de l'air.

### PT-006 — Nouveau rendu procédural
- Nouveau moteur graphique hors ligne dans `app/src/main/assets/visuals.js`.
- Lune texturée par génération procédurale : reliefs, cratères, clair-obscur, trois pyramides facettées.
- Arrière-plan spatial plus riche, Terre visible, anneaux énergétiques et éléments de temples.
- Blocs métalliques galbés, reflets et stries, interfaces dorées, voiles techno-pharaoniques.
- Aucun média externe requis ; aucune connexion Internet.

### Livraison
Fichier debug Android direct après succès de GitHub Actions :
[PartouTeris-v0.1.3-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.3-debug.apk).

`node --test tests/*.test.cjs`, `gradle :app:assembleDebug`.

**Package provisoire :** `com.greenpower2669.partouteris`. Aucun merge dans `main` avant validation humaine. Licence MIT.
