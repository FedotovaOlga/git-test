// Méthode ES6 (moderne)
const premierTitre = document.querySelector('.premierTitre');
console.log(`avec querySelector ${premierTitre}`);
// Autre méthode moins moderne (ne pas utiliser mais à connaitre)
const premierTitre2 = document.getElementsByClassName('premierTitre');
console.log(`avec getElementBy... ${premierTitre2}`);
const premierId = document.querySelector('#premierId');
const premierId2 = document.getElementById('premierId');

// exo recuépérer le h3 avec les deux syntaxes
const h3 = document.querySelector('h3');
// QuerySelector ne récupère que le premier élément trouvé dans le html
const h3Deux = document.getElementsByTagName('h3');
console.log(h3);
console.log(h3Deux);

// Pour récupérer plusieurs éléments il faut utiliser querySelectorAll
const Allh3 = document.querySelectorAll('h3');

console.log(Allh3);

// Exo récuperer tous les "li" 

const items = document.querySelectorAll('.item');

console.log(items);

// Comment styliser, ajouter et supprimer des éléments
// 1. comprendre les noeuds, parents et enfants
const liste = document.querySelector('ul');

console.log(liste);
// retourne la liste "ul"

console.log(liste.children);
// retourne un tableau (htmlcollection) avec tous les "li"

console.log(liste.childNodes);
// retourne tous les noeuds

console.log(liste.parentElement);
// retourne le parent de "ul" donc "body"

const li2 = document.querySelector('.li2');
console.log(li2.nextElementSibling);
// retourne l'élément suivant
console.log(li2.previousElementSibling);
// retourne lélément précédent



// 2. Styliser un ou des éléments en JS
// le Js l'emporte sur le CSS
premierTitre.style.background = "blue";
// fond blue sur le titre "h1"

// items.style.background = "red";
// items est une collection (tableau) on ne peut pas styliser en une fois

// items.forEach((item,index) => {
//     if((index % 2) === 0){
//         item.style.background = 'red';
//     }
//     item.style.listStyle = "none";
// })

for(let i = 0; i< items.length; i++){
    if(i%2 == 0){
        items[i].style.background = 'red';
    }
}
// Exo 
// 1. enlever les points devant chaque li

// 2. mettre le background en rouge uniquement sur les items d'index pair


//  3. Ajouter du contenu et / ou des éléments
// On commence par créer dans le DOM un h4 sans text
const newTitleH4 = document.createElement('h4');
newTitleH4.textContent= "Titre de ma liste";
const divList = document.querySelector('.divListe');
divList.insertBefore(newTitleH4,liste);

// Ajouter un li dans notre ul
let newEl = document.createElement('li');
newEl.innerText = 'Item crée en Js';
liste.appendChild(newEl);

// autre méthode pour ajouter un li
liste.innerHTML += '<li>item ajouté en js avec innerHTML</li>';
liste.children[1].remove();
liste.children[0].replaceWith(newEl);
divList.innerHTML += '<h5>test titre dans div</h5>';

// Supprimer un élément
// liste.children[1].remove();
// Attention à la position de ce traitement pour qu'il fonctionne il faut le faire avant de modifier l'élément parent
