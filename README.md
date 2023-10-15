# Créez une application web de location immobilière avec React
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Scénario
Kasa me recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web.

# Missions
Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité !

# Design
Voici les maquettes sur Figma pour le design d’interface.

# Contraintes fonctionnelles
Quelques précisions sur les fonctionnalités du site :
1. Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
2. La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
3. Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
4. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
