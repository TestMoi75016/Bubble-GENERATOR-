Réaliser une fonction bubblemaker()

Créer une animation bubble en CSS:
- qui indique avec « to » la direction et où va se terminer l’animation de la bulle (ici -250 px du top)
- Préparer réglage de la left pour  le JS
- Régler opacité 
- Hue rotate pour déterminer un ensemble de couleur regarding la roue chromatique 

Créer la bulle :
- créer un Span et le stocker dans une variable « bubble » puis le mette dans le body 
- Créer une class bubble en CSS (sans height sans width) et la donner au span
- Créer une variable "size" et utilise Math.random pour donner une size et une width aléatoire au span 
Positionner la bulle :
- positionner sa top en % à minimum: 50% du top ( en rajoutant +50 à Math. random) 
Positionner sa left :
- Créer une variable plusMoins en stockant un if /else ( ? : ) pour renvoyer 1 ou -1 avec Math.random
- Pointer la "—left" avec setProperty et rajouter en paramètres * plusMoins avec d’avoir aléatoirement une left positive ou négative 

Arrêter la fonction au bout de 8s.
COMPTEUR :
- créer une variable qui stock « 0 »
- ajouter +1 à chaque click à cette variable 
- Créer une variable qui affiche le compteur et y stocker le h3 du html
- Remove la bulle à chaque click 

Appeler la fonction : 
- utiliser setInterval afin de créer en boucle plusieurs fois la fonction 
