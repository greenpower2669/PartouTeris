# Ordres de mission — PartouTetris

## IMMUTABLE / À PRÉSERVER
- Dépôt canonique : `greenpower2669/PartouTetris` (orthographe vérifiée sur GitHub).
- Licence MIT existante préservée.
- Ne jamais fusionner `main` ni publier une Release définitive sans l'accord explicite de Fab.
- Fournir une APK Android directe, non enfermée dans un ZIP, et prévoir distinctement un AAB pour une future publication.
- Package Android `com.greenpower2669.partouteris` : **provisoire, non validé pour publication**.

## PT-001 — Concept quatre fronts
- **Demande de Fab, 20/10/2026 :** Lune ronde vue latéralement ; quatre cadrans de 90°, quatre pièces chutant simultanément et indépendamment sous des parachutes ; rotation et correction tangentielle ; projections semi-transparentes ; Tetris de plus en plus rapide ; couronne géodésique continue 360° qui disparaît ; effets Égypte/pharaons futuristes ; destruction de la Terre si débordement.
- **Demande de Fab :** « Ok code ça ».
- **Statut :** Prototype initial 0.1.0 codé sur branche `feature/lunar-four-fronts-001` ; APK construite, validation tactile humaine attendue.

## PT-002 — Livraison et identité Android
- Livrer une APK debug directement installable depuis GitHub Actions sans extraction ZIP sur téléphone.
- Tester Android 16 / SM-A576B.
- **Statut :** APK 0.1.0 debug créée et vérifiée dans GitHub (run #39504100261), lien direct dans README ; validation humaine sur Android 16 attendue, pas de publication Play.

## PT-003 — Descente lente et jeu vivant (21/10/2026)
- **Retour utilisateur :** « Trop rapide la descente et pa,de sons c pas gai ».
- **Action demandée :** réduire fortement la cadence et ajouter sons/musique motivants.
- **Implémentation :** v0.1.1 : 5 s/étage, vitesse réglable 2–8 s, progression lente, thème original WebAudio et sons d'interaction, curseurs indépendants et mute.
- **Statut :** Build Android et tests CI vérifiés (#39509803472), APK directe 0.1.1 disponible ; ressenti de Fab et son Android réels restent à valider.

## PT-004 — Contrôle naturel à deux mains (21/10/2026)
- Retour de Fab : « Pour moi mlus intuitif j attrape main droite et je tapote main gauche pour pivoter ».
- Contrat : un doigt de la main droite attrape et guide la pièce, le second doigt de la gauche fait tourner **la pièce tenue** par tapotements successifs sans avoir à relâcher la prise ; le second doigt ne détourne jamais la pièce sélectionnée. Bouton de rotation conservé pour un doigt.
- Statut : implémenté en 0.1.2 ; tests automatiques et build Android validés (#39513900116), APK directe disponible ; validation tactile humaine sur Samsung SM-A576B Android 16 attendue.

## PT-005 — Collision aérienne non bloquante (21/10/2026)
- **Demande Fab :** « Les block entre se bloque dàs les air il ne faut pas tans que parachute, bousculé mais continu vers le sol ».
- **Contrat :** aucune collision solide entre blocs actifs en vol ; les blocs verrouillés et le sol sont les seuls obstacles ; priorité de pose déterministe et zéro écrasement lors d'atterrissages simultanés.
- **Statut :** implémenté dans la 0.1.3 ; CI #39517259972 réussie, APK 0.1.3 directe vérifiée ; test sur téléphone encore attendu.

## PT-006 — Refonte visuelle pharaons (21/10/2026)
- **Demande Fab :** « les graphismes doivent être plus beaux que la, on dirait un poc dégeux » ; « Ok code ça ».
- **Contrat :** Lune plus volumétrique, cratères et ombrages, blocs à facettes/reflets, voiles techno-pharaoniques, fond spatial, effets d'énergie, interface plus soignée ; maintenir la lisibilité.
- **Statut :** première refonte graphique procédurale codée en 0.1.3 ; build CI #39517259972 validé ; rendu visuel réel et ressenti de Fab à valider sur téléphone.

## PT-007 — Portrait fixe et pyramides près du titre (21/10/2026)
- Source : capture Android paysage de la 0.1.3 envoyée par Fab.
- Demande explicite : « Met ça en portrait figé stp et les piramides met les plutôt vers le titre en haut ^^ ».
- Verrouillage Android portrait via manifeste et activité, plein écran maintenu.
- Le plateau doit rester entre le HUD et les boutons, jamais sous les contrôles ; l'interface portrait place les commandes sur deux rangées.
- Trois pyramides décoratives à côté du titre en haut, retirées de la texture lunaire (cratères conservés).
- Statut : code et tests validés par CI #39518335994, APK directe 0.1.4 vérifiée ; contrôle du rendu portrait sur Samsung toujours attendu.

## PT-008 — Points et célébrations Block Boost (21 octobre 2026)
- Demande : « Faut des points et des célébrations comme avec block boost pour dynamiser ».
- Référence auditée : Block-Boost (fireworks.mjs, result-celebration.mjs, disco-sprites.mjs) ; principes des scènes bornées et seuils de 1 000 points.
- Code 0.1.5 : +40 points à chaque pose valable, score réel de couronnes et combos, gains flottants ; bulles/projecteurs, disco, feux d'artifice, fanfare originale et option visuelle douce.
- Préserver la licence, les sauvegardes, le tactile, le portrait et les sons existants. Aucun média privé de Djipie transféré.
- Statut : code et build CI #39521425766 vérifiés, APK 0.1.5 non compressée présente sur branche ; validation téléphone attendue.

## IMMUTABLE — Correction officielle de nom (21 octobre 2026)
- Fab confirme : « J ai corrigé le nomnc est PartouTetris ».
- **Dépôt et appellation officiels : `greenpower2669/PartouTetris`**, APK, title Android, en-tête graphique, README, Actions et documentation doivent utiliser ce nom.
- L'ancien nom « PartouTeris » est abandonné pour la présentation ; on préserve le package interne `com.greenpower2669.partouteris` afin de ne pas perdre sauvegardes et compatibilité des APK précédentes.
- N'effectuer aucun renommage du package Android ou des clés localStorage sans accord et migration explicite.

## PT-009 — Terre source des festivités, profondeur, contacts, appui long du deuxième doigt
- Demande Fab : « des célébration devrait venir se la terre que devrait aussibêtre plus grosse » ; « plus il les bloque se pose au centre plus il font des points et plus ils sont en contact avec s autre block aussi 2 autre bloc bonus fois 2 ainsi se suite le deuxieme doigt appuis long accélère la dézcente ».
- Scoring : 40 points de base + 12 × proximité radiale moyenne vers la Lune, multiplicateur ×N à partir de N=2 cellules déjà posées distinctes en contact radial ou tangentiel. Un contact = ×1. Contacts évalués avant placement ; pas de bonus avec la nouvelle pièce elle-même.
- Gestes : doigt primaire guide ; deuxième doigt tap court = rotation ; maintien stable ≥420 ms = chute rapide, retour à normal au relâchement, aucune rotation lors du maintien.
- Visuel : Terre plus grosse, place réservée sous le cercle en portrait ; faisceau, bulles et particules sortent de la Terre vers la Lune ; accessibilité préservée.
- Statut : code PT-009 et APK 0.1.6 compilés avec succès en CI #39573299164 ; test visuel/multitactile Samsung toujours à faire.

## PT-010 — Score, meilleurs scores, pseudo, rentrées enflammées et tirs laser (21/10/2026)
- **Demande Fab :** afficher les points gagnés plus bas ; rendre les débris arrivant de l'espace en flammes ; donner la possibilité de tirer au laser pour orienter les pièces ; en haut, score occupant toute la largeur, avec meilleurs scores en dessous ; réglage d'un pseudo.
- **Scoring inchangé :** points de proximité + contacts et combos conservés. Afficher les gains bas sans recouvrir la Lune ; bandeau supérieur affiche grand score et podium 3 local.
- **Classement :** garder l'ancienne valeur de record (`partouteris-record`) lors de l'introduction du classement local à pseudo modifiable; ne pas perdre les sauvegardes.
- **Laser :** mode explicite par bouton, viser/toucher une pièce volante proche de la trajectoire ; rotation + poussée tangentielle opposée au côté touché si possible ; pas de traversée des blocs fixes, pas d'interruption du contrôle standard lorsqu'on désactive le mode. Son/trace depuis Terre, cadence raisonnable.
- **Entrée en flammes :** simple présentation Canvas, non liée à collision physique ou à un temps de chute différent ; mouvement réduit honoré.
- **Statut :** code et tests PT-010 en 0.1.7 ; CI et vérification humaine Samsung en attente.

## PT-011 — Icône authentique, long trajet spatial, satellites convergents, lune sans pyramides (21 octobre 2026)
- Correction de Fab : « Mais non dessine pas code et prends la nouvelle icone 😀 ... sauf que je ne veux pas de pyramide sur la lune, pas plus maintenant 😜 ».
- Préserver **exactement le concept graphique de l'icône fournie** ; intégrer en ressource binaire Android et en emblème du bandeau, sans nouveau dessin IA. La source originale envoyée est /mnt/data/25255.png.
- Arrivées : les quatre pièces démarrent 4 niveaux radiaux hors du plateau (approche spatiale distincte), traînées incandescentes et blocs réellement visibles en espace libre ; enlever tout parachute du jeu. Maintenir vitesse réglée, quatre fronts, collisions uniquement avec blocs verrouillés, et contrôle tactile à deux doigts.
- Lasers : le tir n'émane plus d'un point central de la Terre mais de **3 satellites terrestres visibles et distincts**, leurs faisceaux convergeant vers une cible unique. Préserver impacts et effets sonores existants.
- Lune : conserver seulement cratères et texture géologique, **aucune pyramide**, aucune icône collée sur le globe ; l'Égypte futuriste reste dans logo et HUD.
- Branches/FabCopilot : intervenir uniquement sur feature/lunar-four-fronts-001, sans fusion main ni Release; APK directe non ZIP. Statut : CI #39591033182 et APK 0.1.8 brute vérifiées ; rendu visuel à valider sur Samsung.

## PT-012 — Petites voiles en zone lunaire et esthétique des deux images (21 octobre 2026)
- Fab précise : les parachutes doivent se déployer **une fois que les pièces entrent dans la zone de jeu**, et rester beaucoup plus discrets qu'au début.
- Phase spatiale de quatre rayons au-delà des dix couronnes : blocs incandescents **sans parachute** ; zone de dix couronnes : petites voiles de stabilisation cyan/or, transparentes, accessoires purement graphiques.
- Inspiration visuelle obligatoire : **icône officielle PartouTetris** (bleu, cyan néon, or, pyramides) + visuel récent de pharaons futuristes, Terre et pyramides-satellites. Satellites modélisés en forme de pyramides dorées avec anneaux et moteurs cyan. Aucun nouveau dessin généré, exclusivement code Canvas Android.
- **Interdit de dessiner des pyramides sur la surface lunaire.** Conserver textures/cratères et tous les contrôles, sauvegardes, scores, vitesse, musique.
- Travaux v0.1.9 dans `feature/lunar-four-fronts-001` ; aucun merge main/release définitive. GitHub Actions #39594087561 et APK 0.1.9 vérifiées ; test visuel/tactile sur téléphone toujours en attente.

## PT-013 — Refonte fidèle, musique officielle et Djipie (21/10/2026)
- Source du design : le PNG déposé sur `main` par Fab, désormais copié à l'identique dans `design/charte-officielle.png` sur la branche de travail. Référence esthétique absolue. Ne pas l'aplatir en fond masquant les commandes.
- UI : titre doré, panneaux cadrés or/cyan, score large, aide gestuelle compacte correcte et commandes existantes conservées. Lune géologique sans pyramides, blocs sur quatre fronts, Terre et satellites-pyramides indépendants, lasers convergents.
- Audio : le MP3 `musique PartouTetris .mp3` de `main` est importé byte-identical comme `official-theme.mp3` ; lecture déclenchée au toucher, boucle et volume paramétrable. Synthèse originale en secours ; laser synthétique étagé activation/charge/tir/impact.
- Djipie : sources des catégories audio consultées ; droits des fichiers individuels non confirmés pour publication publique, donc **aucune copie des sons privés**.
- Livraison attendue : APK brute v0.2.0 sous `temp/`, branche `feature/lunar-four-fronts-001` uniquement, `main` inchangée. État : développé sur branche ; tests CI et fidélité visuelle réelle à valider, aucune fusion/release.

### PT-013 — État technique (21 octobre 2026)
- **Livré sur branche, à valider par Fab :** APK 0.2.0 directe, #39628651992 success, accès via `temp/PartouTetris-v0.2.0-debug.apk`.
- **Non clos :** fidélité fine à la charte officielle ; écoute et boucle musicale sur Samsung ; sons Djipie privés soumis à preuve de droits ; contrôle tactile réel. Aucune fusion `main`, aucune Release et aucun AAB de publication.

## PT-014 — Annonces de score hors plateau (21 octobre 2026)
- **Retour Fab, capture Android 0.2.0 :** le bandeau « 20 000 POINTS ! » au centre cache des couronnes et des pièces ; le bandeau « GAIN +484 ×4 » cache une partie de la vue.
- **Commande explicite « Ok go » :** faire apparaître ces messages **en haut ou en bas, jamais sur le plateau**. Conserver tous les effets, le scoring, les commandes et la musique.
- **Implémentation v0.2.1 :** bannière de célébration dans le panneau score supérieur, remplaçant uniquement le classement pendant l'événement ; petit gain compact sur la ligne « meilleurs scores », sans reflow du HUD. Les animations de particules subsistent sans obstacle tactile. Ces annonces disparaissent automatiquement et libèrent le classement.
- **Musique :** loop HTMLAudioElement (MP3 local officiel), réglages/mute et solution de secours préservés ; raccord sonore réel à tester à l'écoute.
- **État :** correction codée sur `feature/lunar-four-fronts-001`, CI et contrôle Samsung à vérifier. `main` intacte.

### PT-014 — État de livraison (21/10/2026)
- **Livré, à valider par Fab :** version Android 0.2.1 via Actions #39644183018 (success), fichier .apk non compressé dans `temp/`.
- Maintien du lecteur officiel en boucle `track.loop=true`, sans modification du fichier musical ni des préférences de volume. La présence de la boucle dans le code est confirmée, mais la qualité du raccord ne peut être certifiée sans écoute de toute la piste.
- Aucun merge `main` ni Release officielle, prochain essai humain : palier 20 000 et gains simultanés sur Samsung.

## PT-015 — Score de Pharaonite et pseudo Tous3nKamion (21/10/2026)
- Correction de Fab : **« Meilleur score de Pharaonite »** (libellé de la rubrique) et pseudo **« Tous3nKamion »** par défaut, jeu de mots avec Toutânkhamon.
- Préserver classement top 3/top 10, sauvegardes, anciens records, pseudos personnalisés et package Android. Migration de la seule ancienne valeur par défaut « PHARAON », sans altérer les entrées du classement.
- Version cible 0.2.2, branche `feature/lunar-four-fronts-001` seulement ; `main` inchangée. CI et APK à vérifier.

### PT-015 — Livraison à valider
- Version 0.2.2 compilée et tests verts, Actions #39647494324 ; APK brute disponible sur branche via `temp/PartouTetris-v0.2.2-debug.apk`.
- Contrôle visuel Chromium de la bannière « MEILLEUR SCORE DE PHARAONITE » et du pseudo « Tous3nKamion » effectué ; tests réels Samsung et audio restent ouverts. `main` intacte.

## PT-016 — Bannière de jeu néon/or recréée en CODE (21/10/2026)
- Fab fournit visuel de référence titre PARTOUTETRIS doré, O lunaire cyan, pièces géométriques colorées, carénage science-fiction cyan/or, score or géant, record cyan ; il précise expressément « Non, en code ^^ » après une génération d'image incorrecte.
- **Contrat : aucun visuel généré plaqué en fond.** Construire le bandeau en HTML/CSS/DOM, chiffres, pseudo, records toujours dynamiques et sauvegardes inchangées. Ne pas dégrader la zone jouable en portrait ni chevaucher les annonces PT-014.
- Le titre reste accessible sous sa chaîne d'origine, le O visible est une sphère lunaire à cratères dessinée en CSS, 4 tétriminos lumineux sont composés de cellules CSS, les panneaux affichent le score vivant et la meilleure valeur Pharaonite.
- Branche de travail `feature/lunar-four-fronts-001`, cible Android 0.2.3, CI et photo comparative à valider, aucune fusion de main.

### PT-016 — Validation technique
- **Livré pour essai** sur `feature/lunar-four-fronts-001` : Gradle v0.2.3, APK directe non ZIP `temp/PartouTetris-v0.2.3-debug.apk` et capture Chromium `design/rendu-jeu-apercu.jpg`, GitHub Actions #39655192888 success.
- Décor du bandeau 100 % HTML/CSS ; le jeu lui-même et les scores restent dynamiques. `main` n'a pas été fusionnée ni publiée. Attendre feu vert de Fab avant Release/AAB.

## PT-017 — Boost franc ×10 et arrivée depuis la Terre (21 octobre 2026)
- Demande Fab : deuxième doigt maintenu → descente **dix fois plus rapide** et réellement fluide comme dans Tetris, rotation au tap court inchangée ; bouton CHUTE de même puissance.
- Annonce spatiale plus longue (cinq étapes au lieu de quatre, phase légèrement ralentie) ; dans l'espace on peut **tourner mais pas déplacer latéralement**, la prise et l'orientation sont conservées à l'entrée des couronnes.
- Trajectoires graphiques depuis la Terre au premier plan vers quatre directions d'arrivée autour de la Lune ; le visuel 3D simulé n'affecte ni la position logique du moteur ni le contact des blocs.
- Préserver quatre fronts, music loop, nouveaux HUD PT-016, pseudo Tous3nKamion, scores/records et package Android. Cible 0.2.4 sur `feature/lunar-four-fronts-001` ; ne pas fusionner `main`.

### PT-017 — Livraison à tester
- GitHub Actions #39682743622 confirmé **success**, `temp/PartouTetris-v0.2.4-debug.apk` vérifiée 8 789 389 octets sur la branche. Aperçu Chrome réel inspecté : quatre unités spatiales naissent près de l'horizon terrestre et HUD inchangé.
- Le `×10` signifie une vraie multiplication de progression de chute, non une animation artificielle. Rotation conserve tap court, long appui accélère ; pas de translation de secteur pendant approche.
- Test humain sur Samsung requis avant validation définitive. Aucune fusion `main`, aucune Release/AAB.

## PT-018 — Satellites plus vivants, Terre en mouvement et malus laser
- Demande Fab : effets de vie des satellites-pyramides, rotation apparente de la Terre, nuages et cyclones blancs semi-transparents, destruction au tir laser prolongé sur une brique posée avec malus fortement croissant vers les couches élevées.
- Prototype : maintien LASER 1,3 s sur une case verrouillée ; glissement >23px ou relâchement annule la charge, effet visible, une seule case détruite, pas de destruction en chaîne.
- Pénalité = 80×(r+1)×ceil((r+1)/2), facturation plafonnée au score pour empêcher les points négatifs ; toutes les sauvegardes restent inchangées.
- Tout est rendu en Canvas local, satellites avec micro-orbites et poussée cyan pulsante, météo illustrée, réduction effets honorée. Aucun merge `main`, version 0.2.5 branch test.

### PT-018 — Prêt pour validation de Fab
- APK Android de test 0.2.5 livrée non compressée, Actions #39687843781 **success** ; artefact `temp/PartouTetris-v0.2.5-debug.apk` sur branche. Aucune fusion `main`, aucun AAB de publication.
- Les animations Terre/cloud/cyclones/satellites sont calculées localement sans asset de météo ; scoring de laser maintenu et chute ×10 inchangés. Essai réel sur Samsung encore requis.

## PT-019 : Correction laser approuvée par retour utilisateur
Objectif : corriger un mauvais placement moyennant du temps et des points. L'ancienne manipulation empêchait souvent de terminer le tir. Nouvelle manipulation : LASER activé, touche sur une brique posée, focus automatique 1,3 seconde, malus croissant puis retrait d'une brique. Conserver les sauvegardes et `main` intacte ; APK de test 0.2.6 sur la branche.

## PT-020 (22/10/2026)
Fab demande 7 couleurs fixes par forme, sac de 7 tirages et logs L/J/S/Z des poses. Modifications sur la branche : boardTypes, chiralités et statistiques. CI #39742860690 réussie, APK 0.2.7. main à préserver, test Samsung requis.

## PT-021 — Accélérations involontaires (22/10/2026)
- Fab signale des chutes ×10 sans consentement en déplaçant une pièce, notamment entre quartiers.
- Cause confirmée : `touch.js` interprétait un déplacement radial vers la Lune supérieur à 17 px comme commande de boost ; ce geste doit rester exclusivement un déplacement. Autre défaut : bouton CHUTE activait un front mais désactivait le front *actuellement sélectionné*, laissant l'ancien boost actif après changement de sélection.
- Contrat : seul le deuxième doigt maintenu volontairement au moins 420 ms ou un bouton/une touche explicite déclenche ×10. Une glissade du deuxième doigt annule le boost. Chaque source conserve son front initial jusqu'au relâchement, sans conflits entre sources simultanées.
- Debug Android `PartouTouch` : ON/OFF + source et front. Préserver chiralités, couleurs, audio, records et package Android. Branche de travail uniquement, sans fusion `main`. Version 0.2.8 à tester sur SM-A576B.

## PT-022 — A pyramidal et reprise automatique (22 octobre 2026)
- Fab souhaite transformer une lettre du titre stylisé en pyramide et sauvegarder automatiquement une partie pour la reprendre après réouverture.
- Le **A** de PARTOUTETRIS devient une pyramide dorée sculptée en CSS, conservant le O lunaire cyan, les tétriminos, le titre vocal complet et le cadre original. Aucun PNG du logo n'est collé sur le jeu.
- État sauvegardé : les deux grilles polaires 10×48 (front et couleur/type), quatre pièces et angles/rayons/rotations, intervalles de chute, sac global des sept formes + historiques, score, temps, niveau, nombre de poses, couronnes et combos, sélection. Checkpoint toutes les ~850ms, lors de pause, Android onPause, pagehide et background.
- Au démarrage : lire et valider la sauvegarde, proposer « REPRENDRE LA PARTIE » ou « NOUVELLE PARTIE », sans démarrer automatiquement le son tant qu'Android n'a pas reçu un geste. Retirer les accélérations et pointeurs encore en cours avant reprise. Partie terminée ou redémarrée => effacer uniquement checkpoint, préserver pseudo, paramètres, records et classement.
- Fichiers : `session.js` validé/versionné/isolé, `index.html` bouton et déclencheurs, `MainActivity.java` flush onPause, `hud-pt016.css` pyramide CSS ; tests `pt022-session.test.cjs`.
- Build GitHub Actions [#39760329152](https://github.com/greenpower2669/PartouTetris/actions/runs/39760329152) **success**, Android 0.2.9, APK brute `temp/PartouTetris-v0.2.9-debug.apk` (8 799 042 octets). Capture `design/rendu-jeu-apercu.jpg` inspectée : A pyramidal et O lunaire présents sans masquer le plateau.
- Main intacte, validation d'une fermeture/réouverture sur Samsung SM-A576B encore nécessaire avant Release.

## PT-023 — Reprise confirmée et Hall of Fame local (22 octobre 2026)
- Après fermeture complète/réouverture WebView avec checkpoint valide, afficher une question séparée : « Voulez-vous continuer là où vous en étiez ? ».
- OUI : restaurer à ce moment seulement les quatre fronts sauvegardés, puis reprendre au toucher. Le checkpoint n'est pas modifié avant la réponse.
- NON : afficher une **deuxième** fenêtre « Vous êtes sûr ? » ; « GARDER MA PARTIE » retourne à la question initiale sans effacer ; « OUI, NOUVELLE PARTIE » est l'unique voie qui supprime la session et commence à zéro. Records, classements, pseudo et préférences jamais supprimés.
- Hall of Fame **local et hors démarrage** : fenêtre distincte depuis Réglages et fin de partie, dix meilleures performances, pseudo, points, médailles; données déjà conservées par leaderboard.js. Le résumé des trois meilleurs scores dans le HUD reste lisible pendant une partie.
- L'accueil initial affiche « ▶ JOUER » et non « Démarrer avec le son » ni une explication technique Android sur l'audio. La musique suit ses préférences et démarre après un geste, inchangée.
- Tests PT-023 plus ajustement des anciens contrats PT-016 et PT-022, build [GitHub Actions #39763997838](https://github.com/greenpower2669/PartouTetris/actions/runs/39763997838) réussi. APK brute `temp/PartouTetris-v0.2.10-debug.apk`, 8 801 497 octets, sur branche `feature/lunar-four-fronts-001`. Capture de plateau inspectée. Tester la séquence complète sur Samsung. Main intacte.

## PT-024 — Économie stratégique validée en code (23 octobre 2026)
- Mission Fab : vitesse de départ au maximum d'attente 8 secondes/étage, progression de difficulté uniquement quand une couronne disparaît, bonus de vitesse au carré du différentiel, récompense par taille et profondeur, bonus de continuité au carré sur la même couronne et Pont des Pharaons/Géodésie.
- Règle : attente = max(0,8, base*0,92^couronnes), niveau = 1+couronnes. Chaque couronne supprimée accélère immédiatement, jamais le simple temps écoulé ; réglage manuel conservé comme exception explicite.
- Multiplicateur de vitesse = 1 + max(0,8/attente - 1)^2 (plafonné x100) ; le maintien volontaire CHUTE x10 ne modifie pas la difficulté générale du jeu.
- La prime de continuité couvre 48 secteurs circulaires et utilise carré(longueur nouvelle chaîne) moins somme(carrés chaînes antérieures) : seule la nouveauté est récompensée, pas l'ancien score. Pont Royal si au moins deux anciennes chaînes sont réunies, Géodésie lorsque le raccord franchit une frontière 11/12,23/24,35/36,47/0.
- Garder les quatre fronts, contrôles, lasers correcteurs, musique, Hall of Fame local, sauvegardes et records. Aucune fusion main.
- Tests Node + Gradle + capture Chromium et APK v0.2.11 directs : GitHub Actions #39938398035 SUCCESS ; APK brute temp/PartouTetris-v0.2.11-debug.apk (8 803 677 octets, blob SHA 8fa54a73c4d508b2bc254bc9b189540986390c39). Essai Android réel encore requis.

## PT-025 — Hall of Fame inspiré de SpaceFortressVs / GeckoDoku (23 octobre 2026)
- Mission Fab : highscores complets et classement partagé.
- Archivage local de toutes les parties terminées avec ID de session unique, conservation des anciens records et du pseudo.
- Hall local avec Top10 / historique, onglet Monde avec statut de synchronisation et cache.
- Reprise après réseau absent via file persistante, accusés idempotents et déduplication par identifiant réel de partie, jamais par pseudo.
- Bridge Java HTTPS vers le service commun connu, aucune clé privée intégrée.
- Le gameId PartouTetris n'est PAS confirmé sur le serveur partagé : tant que la route /api/v1/games/partoutetris/ n'est pas disponible et testée, ne pas prétendre que des scores mondiaux sont reçus.
- Travail sur la branche existante ; pas de fusion vers main ou de publication Play sans validation.

## PT-026 — Projection tangentielle et observateur virtuel glissant (23/10/2026)
- Fab valide l'expérimentation du contrôle : observateur virtuel projeté au-delà du centre de la Lune sur l'axe opposé à la pièce, projection différentielle des gestes sur la tangente locale, contrôle continu haut/bas/côtés/diagonales sans inversion visible ni retour imposé au centre.
- La main droite garde le bloc ; la seconde main conserve tap pour tourner et maintien pour chute x10. Sensibilité continue plus précise lentement, plus ample rapidement ; contrôles originaux récupérables dans Réglages via « Guidage tangentiel projeté (essai) ».
- Réalisation exclusivement sur `feature/lunar-four-fronts-tangent-026` à partir de `feature/lunar-four-fronts-001`, sans merge main : `tangent-control.js`, `touch.js`, `index.html`, `tests/pt026-tangent.test.cjs`, `design/PT-026-controle-tangentiel.md`.
- Validation CI : [run #39999637500](https://github.com/greenpower2669/PartouTetris/actions/runs/39999637500) SUCCESS (tests Node, build Gradle, publication APK). APK directe : `temp/PartouTetris-v0.2.13-tangent-debug.apk` (8 814 495 octets), versionCode 24. Ne pas confondre la validation technique avec une validation ergonomique humaine.
- Attente : test tactile sur SM-A576B Android 16 en haut, bas, côtés et diagonales, précision doigt éloigné, doigt réagrippé, boutons, laser, chute x10, compatibilité sauvegardes et Hall of Fame. **Fab décide avant fusion, sortie de test ou modification définitive du guidage.**

## PT-027 — Joystick pédagogique de projection tangentielle (23/10/2026)
- Fab : lorsque la pièce passe de l'axe latéral au perpendiculaire, le geste semble exiger une courbe. Placer un petit joystick virtuel **dans le bandeau inférieur**, visible seulement pendant une prise, pour montrer l'axe efficace et le doigt fantôme qui le suit.
- Prototype visuel non interactif : ligne à deux flèches cyan orientée sur la tangente actuelle du morceau, indication horizontal / vertical / diagonal, doigt fantôme animé et marqueur doré reflétant le vrai glissement projeté. Pivot continu avec l'objet ; transitions lisibles, préférence « Effets visuels doux » respectée.
- Ne perturbe ni la prise, le deuxième doigt (rotation ou chute x10), ni le LASER, les paramètres, scores, sauvegardes ou Hall of Fame. Guide masqué au relâchement, pause, laser, perte de focus, mode classique, fin de partie.
- Implémentation isolée dans `feature/lunar-four-fronts-guide-027`, origine `feature/lunar-four-fronts-tangent-026`. Version d'essai **0.2.14 / versionCode 25**. Voir `design/PT-027-joystick-guide.md`, `joystick-guide.js` et tests `pt027-joystick-guide.test.cjs`.
- Validation Android SM-A576B requise avant toute adoption : visibilité en bas, axe conforme aux 48 secteurs et transitions, sensation du contrôle et non-interférence. **Interdiction de fusion vers main sans l'accord explicite de Fab.**
- **Validation technique :** [GitHub Actions #40003656255](https://github.com/greenpower2669/PartouTetris/actions/runs/40003656255) **SUCCESS** : tests Node et build Gradle ; APK directe `temp/PartouTetris-v0.2.14-joystick-debug.apk` (8 817 716 octets) publiée sur la seule branche de test. L'essai tactile réel sur Samsung reste nécessaire avant validation ergonomique.

## PT-028 — Amplitude uniforme et vecteurs tangentiels autour du doigt (23/10/2026)
- Sur captures réelles PT-027, Fab observe que le rail vertical semble nettement plus court que l'horizontal alors que la taille de la Lune reste constante. Demande une **même amplitude de représentation ET de précision tangible** en haut, bas, sur les côtés et diagonales.
- Garder le joystick inférieur et toute l'interface; retirer la limitation verticale du rail (31 unités) et afficher un axe symétrique de même longueur (104 unités SVG) quels que soient les 48 secteurs. Le contrôle `projectDrag` projette déjà sur une tangente unitaire avec gain indépendant de l'angle : vérifier cette invariance sur 48 secteurs sans introduire de zoom / sensibilité arbitraires qui ruinent la finesse.
- Ajouter autour du **premier doigt de prise** deux petits vecteurs cyan de part et d'autre, alignés sur la tangente actuelle à la pièce, qui grandissent/rétrécissent doucement et suivent la pièce en temps réel, sans toucher à la sélection ou au déplacement. Effets doux => tracés fixes.
- Visuels non interactifs seulement ; disparition à la fin de la prise, pause, laser, réglages, mode traditionnel, fin de partie ; second doigt rotation/chute x10, sons, scores/HOF, sauvegardes et ancien mode intacts.
- Branche réservée `feature/lunar-four-fronts-amplitude-028` issue de PT-027, APK d'essai Android **0.2.15** (versionCode 26) ; aucun merge de `main` sans feu vert. Détails de conception : `design/PT-028-amplitude-et-vecteurs.md`. Essai humain sur SM-A576B requis.
- **Livraison vérifiée :** [Actions #40006601647](https://github.com/greenpower2669/PartouTetris/actions/runs/40006601647) SUCCESS (tests + Gradle + publication) ; APK brute `temp/PartouTetris-v0.2.15-amplitude-debug.apk` (8 819 044 octets, SHA Git `fdd4b133aa757ebed843e684013cc7898b4c1e46`). Validation du confort tactile par Fab encore attendue.

## PT-029 — Lune fantôme de guidage orbital et vecteurs néon renforcés (23/10/2026)
- Fab valide la mathématique tangentielle et l'amélioration PT-028 constatée sur Samsung; le frein résiduel se situe dans la compréhension **visuelle** des transitions circulaires sur 360°. Ne pas retoucher la projection ni la vitesse/sensibilité des gestes.
- Dessiner en arrière-plan des pièces une **lune fantôme extrêmement translucide** autour d'un pivot pédagogique créé au premier point de prise : centre local projeté en arrière du doigt le long de la radiale de la pièce. L'ancre reste stable pendant la prise; un arc doux sur la circonférence suit le secteur actuel pour expliquer l'orbite à 360°. Rayon de 58 px et couleurs bleu/cyan alpha bas, sans masquer briques et dangers. Invisible sans prise, en pause, laser, réglages, mode ancien, hors zone lunaire, ou après relâchement/annulation.
- Les **deux vecteurs opposés près du doigt** deviennent plus longs (départ 30 px, longueur 24 à 42 px), semi-transparents (alpha 0,58) et néon cyan; ils suivent la tangente actuelle avec pulsation douce ou fixe quand « Effets visuels doux » est coché.
- Conserver le joystick inférieur, le calcul PT-026, le gain PT-028, le second doigt (rotation et chute x10), lasers, scores/HOF, sauvegardes, compatibilité APK et visuels originaux.
- Prototype exclusivement `feature/lunar-four-fronts-ghostmoon-029`, version Android d'essai **0.2.16** (versionCode 27) ; design et tests : `design/PT-029-lune-fantome.md` et `tests/pt029-ghost-moon.test.cjs`. Essai ergonomique réel à valider avant merge. **Aucun merge main ni publication de production sans validation explicite de Fab.**
- **Validation technique :** [GitHub Actions #40017033820](https://github.com/greenpower2669/PartouTetris/actions/runs/40017033820) **SUCCESS** : tous les tests Node, compilation Gradle et publication de l'APK réussis. Fichier téléchargeable directement : `temp/PartouTetris-v0.2.16-ghostmoon-debug.apk` (8 821 068 octets, SHA blob Git `dc54f2c8127ec018568674e3bd9306d7020d3fcb`). Vérification ergonomique sur le téléphone de Fab **encore à réaliser**, sans fusion sur `main`.

## PT-030 — Anti-exploit bonus de vitesse réellement gagné pendant le vol (23/10/2026)
- Fab a détecté qu'un joueur pouvait **augmenter la vitesse juste avant la pose**, faisant appliquer à la pièce entière le multiplicateur au carré instantané. Il faut chronométrer chaque pièce **depuis sa création dans l'espace jusqu'à son verrouillage**, mesurer la durée de jeu actif et calculer le bonus sur sa **vitesse moyenne réelle de parcours** par rapport à une référence de même distance au rythme initial 8 s/étage. Une pose plus haute doit utiliser une référence adaptée, sans simuler de trajet jusqu'au sol.
- Conserver le carré du différentiel positif de vitesse, plafond ×100, et **interdire tout recours au curseur de vitesse instantanée pour le paiement**. Chute volontaire ×10 toujours possible : elle ne récompense que le temps réellement gagné. Les couronnes utilisent aussi le multiplicateur acquis par les pièces qui les déclenchent (minimum en cas de plusieurs arrivées simultanées), pas la gravité recalculée après nettoyage de couronne.
- Utiliser `game.seconds` (temps de jeu actif hors pause), avec `spawnedAtSeconds` par pièce, sérialisé dans le checkpoint local ; **compatibilité des sauvegardes v1** garanties, y compris anciennes pièces sans horodatage (multiplieur prudent ×1 au prochain placement). Garder scores déjà gagnés, pseudo, HOF local/mondial.
- **Ne rien changer d'autre** : géométrie de guidage tangent, Lune fantôme, vecteurs néon, laser, contrôles 2 mains, difficultés, couronnes, bruitages et tous les assets précédents. Travail exclusivement en `feature/lunar-four-fronts-score-flight-030`, sans fusion sur main ni publication définitive.
- Prompt complet de passation : `design/PT-030-anti-exploit-score-vol.md`. Tests automatisés `tests/pt030-flight-score.test.cjs` ; APK d'essai `0.2.17` à valider sur Samsung.
- **Portée de l'anti-triche :** correction du calcul honnête de l'APK ; elle ne remplace pas une validation serveur cryptographiquement fondée contre des clients modifiés. Aucun ancien score HOF ne doit être altéré.
