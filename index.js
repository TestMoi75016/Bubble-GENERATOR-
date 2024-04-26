const counterDisplay = document.querySelector("h3"); // Pointer le h3 pour y afficher le conteur de bulle détruites

let counter = 0; //variable qui stock le chiffre "0" et sera incrémentée de 1 à chaque click plus bas ds ma fonction bubblemaker()

// FONCTION qui va créer la bulle : j'ai mis tte ma logique de création de bulle ds une fonction
const bubblemaker = function () {
  //CREER élément HTML en JS : "creatElement" // LE PLACER dans le html : "appendChild"
  const bubble = document.createElement("span");
  document.body.appendChild(bubble); // ici le span est dorénavant ds le body

  //Ajouter une class crée en CSS à une variable JS: classList.add("")
  bubble.classList.add("bubble"); //On ne voit pas encore de bulle car elle n'a pas de taille définie mais elle est bien là

  //Méthode "random()" de l'objet JS "Math" (Renvoie tjr chiffre entre  0 et 1)
  //Si je veux un chiffre entre 100 et 300 :
  const size = Math.random() * 200 + 100 + "px"; // Rajoute "px" car sinon on aurait injecté juste nombre. On veut s'en servir comme taille aléatoire pour nos bulles
  //console.log(size);
  bubble.style.height = size;
  bubble.style.width = size;

  //POSITIONNEMENT ALEATOIRE DE LA BULLE sur la page à chaque actualisation:
  // Rajout de x100 car on veut un placement de la bulle en pourcentage entre 0 et 100% du haut de la page
  // "+50" : Bulle popera à minimum 50% du top si chiffre random = 0, [0 x 100 + 50 = 50%]
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%"; // Bulle peut apparaitre tout à gauche ou tt à droite

  //Création d'une variable qui renvoi tjr 1 ou -1 (? = Alors | : = else/sinon) DC ici on fait un if/else
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  //Pointer la left en JS et indiquer son placement en pourcentage par rapport à la gauche de la page.
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%"); // la bulle part vers la droite ou vers la gauche

  //Arret de la fonction après 8 secondes:
  setTimeout(() => {
    bubble.remove();
  }, 8000); // Comme l'animation dur 8s chaque bulle est éffacée au bout de 8s

  //La bulle s'autodetruit quand je click dessus
  bubble.addEventListener("click", () => {
    counter++; // Variable qui stock "0". "++" signifie que l'on ajoute "1" à chaque click
    counterDisplay.textContent = counter; // textContent car on injecte du texte ds le h3: ici le nombre de la variable "counter" qui s'actualise de +1 à chaque click sur une bulle.
    bubble.remove(); // Detruit la bulle
  });
};

//APPEL DE LA FONCTION "bubblemaker()", qui se joue ttes les 300 millisecondes:
setInterval(() => {
  bubblemaker();
}, 300); //Toutes les 300ms, il joue la fonction bubblemaker() à l'infini en créeant une nouvelle bulle.

//On peut aussi écrire de cette maniere ça fonctionne:
//setInterval(bubblemaker,300);
