// les résultats de l'éxécutions sont visibles sur localhost/exo_javascript/index.html, doubleclick droit -->Inspecter/Console
//log de Hello JS !
console.log("Hello JS !");

/*
  Apprenons à coder
  en Javascript
*/



// CONDITIONS
//--------------------------------------------------

// le bloc if simple (si la condition est vraie)
// attention on ne fait rien ici si une personne a moins de 18 ans!
age = 19;
if (age >= 18) {
  console.log("La personne est majeure.");
}

// la variante if/else (si la condition est vraie, sinon)
age = 10;
if (age >=18) {
    console.log("La personne est majeure.");
} else {
    console.log("La personne est mineure.");
}
//cas standard du switch

let action = "virement";

switch (action) {
  case "retrait":
    // instructions de retrait
    break;
  case 'virement':
    //instructions de virement
    break;
  case "clotureCompte":
    //instructions de cloture de compte
    break;
  default:
    //instructions par défaut
    break;      
}

//la variante if/elseif (si une condition est vraie, sinon si une autre condition...)
// attention on ne fait rien ici si une personne a moins de 40 ans!
age = 44;
if (age >= 100) {
  console.log("La peronne est centenaire.");
} else if (age >= 80) {
  console.log("La personne est au moins octogénaire.");
} else if (age >= 60) {
  console.log("La personne est au moins sexagénaire.");
} else if (age >= 40){
  console.log("La personne est au moins quadragénaire.")
}

// la variante complète if/elseif/else (si la condition est vraie, sinon si une autre condition, sinon si ..., sinon)
age = 105;
if (age >= 100) {
  console.log("La peronne est centenaire.");
} else if (age >= 80) {
  console.log("La personne est au moins octogénaire.");
} else if (age >= 60) {
  console.log("La personne est au moins sexagénaire.");
} else if (age >= 40){
  console.log("La personne est au moins quadragénaire.")
} else {
  console.log("La personne n'est pas encore quadragénaire.");
}

//cas de switch sans "break" sistématique
let numberToGuess = 7;
let operation = "foisDeuxPlusTrois";

switch(operation) {
  case "plusUn":
    numberToGuess++;
    break;

  case "foisDeuxPlusTrois":
    numberToGuess *= 2;
    
  case "plusTrois":
    numberToGuess += 3;
    break;
    
  case "foisZero":
  default:
    numberToGuess = 0;
    break;  
}



// BOUCLES
//-------------------------------------------------

// le for "de a à b inclus
for (let i=1; i <= 10; i++) {console.log(`3 x ${i} = ${3 * i}`);
}

// le for "n fois" (ici "3 fois", pour i allant de 0 inclus à 3 exclu [donc jesqu'à 2 inclus], 
// écrivant 3 fois au total la phrase dans la console)
for (let i = 0; i < 3; i++) {
  console.log("Je serai un bon développeur");
}

// le for "de a à b inclus avec un pas différent de 1"
for (let i = 3; i <= 10; i += 3) {
  console.log(` ${i} est inférieur ou égal à 10 et est divisible par 3`);
}

// le for "inversé" (on décrémente au lieu d'incrémenter)
for (let i = 5; i> 0; i--) {
  console.log(`${i}...`);
}
console.log("Bonne annéee !");

// le "while" classique (ici on écrit la phrase dans le console tant que la variable est
//strictement inférieure à 18):
let kAge = 12;
while (kAge < 18) {
  console.log(`J'ai maintenant ${kAge} ans...`);
  kAge++;
}
console.log(`J'ai finalement ${kAge} ans.`);


//FONCTIONS
//---------------------------------------------------------------------

//déclaration de la fonction
function nomDeLaFonction(arg1, arg2, arg3) {
  //logique impléméntée
  const result = arg1 * arg2 + arg3;
  // renvoi d'un résultat
  return result; 
}
// appel à la fonction déclarée plus haut
const valeurRenvoyee = nomDeLaFonction(1, 2, 3);



//Exemples des fonctions

// déclaration de la fonctiongetNombreFoisTrois, qui prend en argument
//un nombre et qui envoie le triple de ce nombre
function getNombreFoisTrois(nombre) {
  // nombre est un argument et une variable locale
  return nombre * 3; // la fonctionretourne le résultat du calcul
}
//appel à la fonction getNombreFoisFois en lui passant 5 en argument
//et affectant du résultat reçu dans la constante cinqFoisTrois
const cinqFoisTrois = getNombreFoisTrois(5); //cinqFoisTrois = 15

// log de cinqFoisTrois dans la console
console.log("cinqFoisTrois = " + cinqFoisTrois);


// une fonction sans résultat retourné
function logPhraseAvecPointDExclamation(phrase) {
  console.log(`${phrase} !`);
}
logPhraseAvecPointDExclamation("Je serai un bon développeur");

//une fonction sans argument
function getApproximationPi() {
  return 3.14; // ou 22/7
}
console.log(`360 deg = 2*pi ~= ${2 * getApproximationPi()} rad`);




// fonction qui retourne le résultat de l'additions de 2 nombres
function getResultatAdditionDe2Nombres(nombre1, nombre2) {
  return nombre1 + nombre2;
}
// fonction qui retourne le résultat de la multiplication de 2 nombres
function getResultatMultiplicationDe2Nombres(nombre1, nombre2) {
  return nombre1 * nombre2;
}
// une fonction qui appelle d'autres fonctions, en fonction de l'opération demandée
// et retourne le résultat reçu de la fonction appelée
// note : l'instruction "return" met fin à l'exécution de la fonction
function getResultatCalculEntre2Nombres(nombre1, operation, nombre2) {
  // en fonction de l'opération demandée
  switch (operation) {
    // addition et soustraction (a - b = a + -b)
    case "addition":
      return getResultatAdditionDe2Nombres(nombre1, nombre2);
    case "soustraction":
      return getResultatAdditionDe2Nombres(nombre1, - nombre2);
      
    // multiplication et division (a / b = a * 1/b)
    case "multiplication":
      return getResultatMultiplicationDe2Nombres(nombre1, nombre2);
    case "division":
      return getResultatMultiplicationDe2Nombres(nombre1, 1 / nombre2);
      
    default:
      console.log(`Opération "${operation}" non géré`);
      return null;  
  }
}
console.log(`7 + 2 = ${getResultatCalculEntre2Nombres(7, "addition", 2)}`);
console.log(`6 - 1 = ${getResultatCalculEntre2Nombres(6, "soustraction", 1)}`);
console.log(`3 * 4 = ${getResultatCalculEntre2Nombres(3, "multiplication", 4)}`);
console.log(`10 / 2 = ${getResultatCalculEntre2Nombres(10, "division", 2)}`);
console.log(`2 ** 3 = ${getResultatCalculEntre2Nombres(2, "puissance", 3)}`);


//  TABLEAUX
//--------------------------------------

// Les tableaux permettent de stocker des données de façon groupée.
// Si des données à manipuler ont un lien entre elles, alors il est plus pratique 
// d'utiliser un tableau et de l'affecter à une variable et facilement automatiser un traitement

//______________________________________
// 1. Tableaux indexés
//______________________________________

// créer un tableau vide et l'affecter à une variable
const tableauVide = [];

// créer un tableau indexé qui contient des valeurs fournies (ici 7 nombres) et
// l'affecter une variable
const tabNums = [11, 22, 33, 44, 55, 66, 77];

// ajouter un élément à la fin du tableau (en dernière position)
// en utilisant la méthodes .pussh de la classe Array
tableauVide.push(2);
tableauVide.push(3);
tableauVide.push(7);
console.log("tableauVide = ", tableauVide);

// récupérer un élément par son index
console.log("tableauVide[1] = ", tableauVide[1]);

//modifier la valeur de l'élément à l'index 2
tableauVide[2] = "abc";
console.log("tableauVide = ", tableauVide);

// boucler sur un tableau et appliquer une logique pour chaque élément
// exemple : boucler sur un tableau (de 0 à length-1)
for (let i = 0; i < tableauVide.length; i++) {
  // récupération de l'élément à l'index i
  const elementTableauVide = tableauVide[i];
  // log de cet élément
  console.log("tableauVide[" + i +"] = ", elementTableauVide);
}


// Quelques méthodes utiles pour les tableaux indexés

// 1 - méthode .push(newElement) montrée en haut


// 2 - méthode .join(separateur) transforme un tableau en string,
// en concaténant tous les éléments dans l'ordre et en ajoutant
// le éparateur entre chaque élément
console.log(`tabNums.join("_|_") = ${tabNums.join("_|_")}`);


// 3 - méthode .includes(elementRecherche) renvoie true/false
// si l'élément est présent ou non dans le tableau
console.log(
  `L'élément ${77} ${tabNums.includes(77) ? "est" : "n'est pas" }
  présent dans le tableau [${tabNums.join(", ")}]`
);
console.log(
  `L'élément ${44} ${tabNums.includes(44) ? "est" : "n'est pas" }
  présent dans le tableau [${tabNums.join(", ")}]`
);


// 4  - méthode .indexOf(elementRecherche) renvoie l'index de l'élément recherché
// (entre 0 et length-1 si trouvé, -1 sinon)
const indexOf77 = tabNums.indexOf(77);
if (indexOf77 != -1) {
  console.log(`L'élément ${77} est à l'index ${indexOf77} dans
  le tableau [${tabNums.join(", ")}]`);
} else {
  console.log(`L'élément ${77} n'est pas présent dans le tableau
  [${tabNums.join(", ")}]`);
}


// 5 - méthode .slice(indexDebutEltInclus, indexFinEltExclu) renvoie une copie
// (sans impacter le tzbleau initial) d'un morseau du tableau
// Attention : l'index de début est inclus mais l'index de fin est exclus
const morceau = tabNums.slice(2, 4);
console.log(`morceau (tabNums.slice(2, 4)) = [${morceau.join(", ")}]`);


//____________________________________________
// Tableaux associatifs
//____________________________________________

// Un tableau associatif regroupe des éléments sous la forme de paires (ou duos)
// clef/valeur

// Création d'un tableau associatif vide, sans aucune paire clef/valeur 
// == initialisation 
let tabAssocVide = {};

// Ajout d'une paire clef/valeur
tabAssocVide.prenom = "Bryan";
tabAssocVide.age = 27;
console.log("tabAssocVide =", tabAssocVide);

// Accéder à une valeur (ici la propriété "prenom")
console.log(`Je m'appelle ${tabAssocVide.prenom}`);

// Modification d'une valeur(ici l'age passe à 28)
tabAssocVide.age = 28;
console.log("tabAssocVide = ", tabAssocVide);




// Création d'un tableau associatif plus riche contenant des paires clef/valeur
// ici le Pokémon Pikachu
let pikachu ={
  id: 25,                   // number (entier)
  name: "Pikachu",          // string 
  weight: 6.0,              // number(décimal)
  hpMax: 80,                // number(entier) -- points de vie max
  attacks: [                // Array(tableau indexé)  -- liste des attaques
    {
      name: "Vive-Attaque", //string    -- nom de l'attaque
      damages: 10,          // number(entier) -- puissance de l'attaque
    },
    {
      name: "Boule Elek",
      damages: 20,
    },
  ],
};
console.log("pikachu = ", pikachu);

// Création d'une fonction, ainsi il sera simple d'appeler cette logique avec d'autres Pokemons
function listerAttaquesPokemon(pokemon) {
  // écriture de la premières ligne
  console.log(`${pokemon.name} possède ${pokemon.attacks.length} attacks :`);

  // pour chaque attaque (dans le tableau indexé pokemeon.attacks)
  for (let i = 0; i < pokemon.attacks.length; i++) {
    // récupération du tableau associatif de l'attaque (le i-ème élément)
    const attaque = pokemon.attacks[i];

    // écriture d'une ligne d'attaque
    console.log(`\t"${attaque.name}" (puissance ${attaque.damages})`);
  } 
}

// appel de la fonction listerAttaquePokemon en lui passant pikahu comme argument/paramètre
listerAttaquesPokemon(pikachu);
