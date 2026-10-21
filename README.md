# PartouTeris — Les Pharaons de la Lune

## Android 0.1.5 : points et célébrations façon Block Boost

- +40 points par pièce Tetris réellement posée. Score et record locaux préservés.
- Couronne 360 degrés : 480 × nombre de couronnes au carré × niveau, plus 100 points par combo consécutif au-delà du premier.
- Une couronne : bulles, cinq projecteurs, texte et points gagnés.
- Double couronne : boule à facettes, bulles, spots, vraie récompense affichée.
- Chaque tranche de 1 000 points : feux d'artifice de session bornés à 5,6 secondes et mini-fanfare WebAudio entièrement originale, sans interruption brutale de la musique.
- Une grosse récompense qui traverse plusieurs tranches ne multiplie pas artificiellement les scènes.
- Effets visuels doux réglables, en respectant la préférence système d'animations réduites. Les célébrations ne capturent jamais les doigts.

Restent intacts : mode portrait fixe, trois pyramides à côté du titre, quatre chutes simultanées non bloquantes, commandes droite/gauche, vitesse réglable et jeu hors ligne.

### Livraison APK directe
Lien après validation de la compilation : https://raw.githubusercontent.com/greenpower2669/PartouTeris/feature/lunar-four-fronts-001/temp/PartouTeris-v0.1.5-debug.apk

Tests : node --test tests/*.test.cjs ; gradle :app:assembleDebug.
Package provisoire com.greenpower2669.partouteris, branche feature/lunar-four-fronts-001, jamais de fusion main sans validation.
