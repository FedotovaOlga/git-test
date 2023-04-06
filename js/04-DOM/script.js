// Méthode ES6 (moderne) mais un peu moins rapide
const premierTitre = document.querySelector('.premierTitre');

// Autre méthode moins moderne (ne pas utiliser mais à connaitre)
const premierTitre2 = document.getElementsByClassName('premierTitre');

const premierId = document.querySelector('#premierId');
const premierId2 = document.getElementById('premierId');

// Exo: récupérer le h3 avec les 2 syntaxes



const titre3 = document.querySelector('h3'); // QuerySelector ne récupère que le premier élément trouvé dans le HTML

console.log(`avec querySelector ${titre3}`);

console.log(titre3);

const titre3v2 = document.getElementsByTagName ('h3'); // créé un tableau (tous les éléments h3 de mon html)

console.log(`avec getElementBy... ${titre3v2}`);

console.log(titre3v2);

// Pour récupérer plusieurs éléments avec querySelector, il faut utiliser querySelectorAll
const Alltitres3 = document.querySelectorAll('h3');

console.log(`avec querySelectorAll ${Alltitres3}`);
console.log(Alltitres3);

// Exo récupérer tous les "li"

const items = document.querySelectorAll('.item'); // c'est tjrs plus propre de récupérer les éléments par leur classe, plutôt que par la balise HTML (ici 'li')

console.log(items);

// Comment styliser, ajouter et supprimer des éléments
// 1. Comprendre les noeuds, parents et enfants
const liste = document.querySelector('ul'); // vaut mieux éviter d'appeler mes constantes par les noms de balises HTML

console.log(liste); // retourne la liste "ul"

console.log(liste.children);
// retourne un tableau (htmlCollection) avec tous les "li"

console.log(liste.childNodes);
// retourne tous les noeuds

console.log(liste.parentElement); // retourne le parent de "ul", donc "body"

const li2 = document.querySelector('.li2');
console.log(li2.nextElementSibling);
// retourne élément suivant



console.log(li2.previousElementSibling);
// retourne élément précédent

// 2. Styliser un ou des éléments en JS
// le JS l'emporte sur le CSS
premierTitre.style.background = "blue";
// fond bleu sur le titre "h1"

// items.style.background = "red";
// items est une collection (tableau), on ne peut pas styliser tous les items en une fois


// Exo
// 1. enlever les points devant chaque li

//  2. mettre le background en rouge uniquement sur les items d'index pair


// Avec la boucle forEach
items.forEach((item, index) => {
    if ((index % 2) == 0) {
        item.style.background = 'red'; // ici on a utilisé Modulo (0 qui reste après qu'on a divisé par deux => c'est pair!) 
    }

    item.style.listStyleType = 'none';
});

// avec la boucle for if :
// for (let i=0; i<items.length; i++){
//     if(i%2 == 0){
//         items[i].style.background = 'red';
//     }
//     items[i].style.listStyleType = 'none';
// }


// 3. Ajouter du contenu et / ou des éléments
// On commence par créer dans le DOM un h4 sans texte
// chaque élément dans le DOM (page et à droite) est un noeud


const monH4 = document.createElement('h4');
monH4.textContent = "Titre de ma liste";
const divListe = document.querySelector('.divListe');
// c'est divListe le parent, mais ça peut aussi etre le body
divListe.insertBefore(monH4,liste);

// Ajouter un li dans notre ul
let newEl = document.createElement ('li');
newEl.innerText = 'Item créé en JS';
liste.appendChild(newEl);

// autre méthode pour ajouter li
liste.innerHTML += '<li>item ajouté en js avec innerHTML</li>'; // faut pas oublier le +, parce que sinon ça remplace
liste.children[1].remove(); 
liste.children[0].replaceWith(newEl);

monH4.innerHTML += '<h5>mon h5 inséré avec innerHTML</h5>'; // faut que élément avant lequel on insére soit déjà créé avec querySelector

// ///// Supprimer un élément///////

// liste.children[0].remove();
// Attention à la position de ce traitement : pour qu'il fonctionne, il faut le faire avant de modifier l'élement parent. Ici l'élément parent n'est pas "liste" mais 'divListe" donc ça marche


// const li3 = document.getElementById("i-3");
// li3.remove(); // Avec cette méthode, il faut créer un id dans HTML pour supprimer l'élément avec cet id (pas recommandé par le prof); on peut faire pareil avec toute une classe