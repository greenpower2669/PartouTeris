# 🌙 PartouTetris — Les Pharaons de la Lune

## Android 0.1.8 — Véritable icône, espace sans parachute, satellites de défense

**Référence utilisateur :** icône originale `/mnt/data/25255.png` fournie par Fab (emblème PT doré, cercles techno cyan, pyramides dans l'illustration). Son rendu WebP optimisé est embarqué dans l'APK : `app/src/main/res/drawable-nodpi/icon.webp` et `app/src/main/assets/brand-icon.webp`. L'illustration reste dans l'icône et le titre seulement, jamais sur la Lune.

- **Lune :** planète à cratères ; **zéro pyramide dessinée sur sa surface**, contrairement à l'illustration conceptuelle précédente.
- **Phase spatiale prolongée :** les quatre pièces débutent à `RINGS + 4` et avancent sur quatre étapes supplémentaires avant de traverser le plateau. La gravité extérieure reste progressive (intervalle ×0,72) ; les pièces apparaissent visuellement comme des segments lumineux **au-delà de l'anneau**, avec traînées incandescentes.
- **Aucun parachute en vol** : ancien rendu du petit parachute complètement retiré du moteur visuel et de l'écran. Les débris restent libres de se croiser dans l'espace et dans l'orbite.
- **Trois satellites autour de la Terre**, visibles en bas de l'écran, équipés d'un corps doré, de panneaux solaires bleu nuit et d'un émetteur cyan. Au tir, **trois faisceaux distincts** partent des satellites et convergent vers la même pièce touchée. Le tir continue de tourner la pièce et de la repousser légèrement si visée sur le côté et si la case est libre.
- **Identité visuelle :** utilisation de l'icône fournie et non d'une redessinée par IA, dans Android et le titre du jeu.
- **Tout le gameplay conservé :** portrait fixe, score grand en haut, podium des meilleurs scores, pseudo, quatre fronts, commandes à deux mains, musique offline, points par profondeur et contacts, combos, feux d'artifice et réglages d'accessibilité.
- **Identifiant Android inchangé** : `com.greenpower2669.partouteris`, pour préserver les données lors de l'installation.

### APK Android de test (directe, non ZIP)
[PartouTetris-v0.1.8-debug.apk](https://raw.githubusercontent.com/greenpower2669/PartouTetris/feature/lunar-four-fronts-001/temp/PartouTetris-v0.1.8-debug.apk)

Ce lien n'est validé qu'après réussite GitHub Actions et confirmation du fichier dans `temp/`. Aucune fusion `main` ni Release définitive sans l'accord de Fab.

Tests : `node --test tests/*.test.cjs`, puis `gradle :app:assembleDebug`.
