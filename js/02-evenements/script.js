const btn = document.querySelector('button');
// Une autre mauvaise pratique fréquente
// btn.onclick = function() {
//     console.log('hello world');
// }


// En JS moderne il faut utiliser un écouteur d'évènement
// addEventListener
// Une fonction qui n'a pas de nom est une fonction anonyme

// btn.addEventListener('click', function(){
//     console.log('hello world');
// })

// Comment supprimer un écouteur d'évènement
// On doit dans ce cas utiliser une fonction nommé
const titre = document.querySelector('h1');
function foo(){
    console.log('hello world');
    titre.style.background = 'blue';
    btn.removeEventListener('click', foo);
}

btn.addEventListener('click', foo) // on met pas les deuxièmes parenthèses avec une fonction nommé (parce que sinon ça va s'activer tout seul tout le temps)

// Petite liste d'écouteurs d'évènements
// mouseenter : la souris entre dans un élément html
// mouseout : sort d'un élément html
// keydown : on appuie n'importe quelle touche du clavier
// keyup : on lache
// load : pour afficher un petit logo pendant un chargement de site
// input : pour les champs de formulaire (de type input)
const inp = document.querySelector('input');

inp.addEventListener('input', function(e){
    console.log(e); // récupère tout
    console.log(e.data); // récupère juste la lettre qu'on ajoute
    console.log(inp.value); // récupère l'intégralité de ce qui est écrit dans le formulaire
})

// le "e" est l'objet d'évènement; "e" c'est pour "event"; on peut écrire "event" partout

// La méthode preventDefault /////// permet d'interdire le rechargement de la page (=comportement par défaut d'un élément)

const form = document.querySelector('form');
const inText = document.querySelector('#inputText');

form.addEventListener('click', function(e){
    e.preventDefault();
    console.log(inText.value);
})

// Exo
// 1. changer la couleur du cercle en 'red' quand la souris sort du cercle

const cercle = document.querySelector('.cercle');

cercle.addEventListener('mouseout', function (){
    cercle.style.background = 'red';
});

// 2. changer la couleur du carré en 'violet' au click

const carre = document.querySelector('.carre');

carre.addEventListener('click', ()=> {
    carre.style.background = '#0000FF14';
});