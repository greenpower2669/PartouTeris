# 🌙 PartouTetris — Les Pharaons de la Lune

**Nom officiel : PartouTetris** (dépôt corrigé par le propriétaire le 21 octobre 2026).

## Android 0.1.6 — Terre plus grande, points stratégiques, deuxième doigt accélérateur

- **Une Terre plus grosse**, en bas de l'écran portrait, avec continents, nuages et atmosphère, dans un espace réservé qui ne couvre pas les blocs. Les bulles, feux d'artifice, faisceaux et éclats festifs **partent visuellement de la Terre vers la Lune**, en respectant le mode effets doux.
- Chaque pièce posée rapporte **40 points + 12 points par cran moyen plus proche du centre** (profondeur géodésique : 0 au bord de la Lune, 9 à l'extérieur). Une pose proche de la Lune vaut davantage.
- Contacts avec **d'autres cellules déjà posées** : **2 contacts = ×2**, **3 = ×3**, **4 = ×4**, etc. Un contact = ×1 ; on compte les cases distinctes, pas la pièce elle-même ni le sol lunaire. Continuité d'angle à 360 degrés.
- Les points sont calculés **après détermination de la position d'atterrissage mais avant d'écrire la nouvelle pièce**. Aucun bonus pour une pièce qui déborde.
- Affichage flottant de la récompense effective (par exemple « +284 ×2 ») et son de connexion quand le bonus est supérieur à ×1. Les bonus de couronnes et célébrations tous les 1 000 points sont conservés.
- **Deuxième doigt :** tap bref = pivoter de 90 degrés, **appui long stable 420 ms** = chute accélérée tant qu'il reste appuyé. La main principale peut toujours guider la pièce sans lâcher. Au relâchement, retour immédiat à la vitesse habituelle. Le glissement radial de la main droite et le bouton CHUTE restent fonctionnels.
- Conservation des quatre fronts, du mode portrait fixe, des pyramides en haut et des enregistrements locaux.

### Installation sur Android

**APK brute, sans ZIP**, après validation GitHub Actions :

[PartouTetris 0.1.6 — APK](https://raw.githubusercontent.com/greenpower2669/PartouTetris/feature/lunar-four-fronts-001/temp/PartouTetris-v0.1.6-debug.apk)

### Développement et précautions

- Branche : `feature/lunar-four-fronts-001`, aucune fusion dans `main` sans validation explicite.
- Package technique `com.greenpower2669.partouteris` **volontairement conservé** pour que les installations/mémoires précédentes restent compatibles malgré le nom corrigé.
- Identifiants JavaScript internes `PartouEngine`, `PartouTouch`, etc. également conservés pour éviter une régression.
- Tests : `node --test tests/*.test.cjs` ; Android : `gradle :app:assembleDebug`.
