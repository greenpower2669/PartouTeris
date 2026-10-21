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
