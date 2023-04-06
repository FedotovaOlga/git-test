// alert('bonjour depuis le script');
// si pas intégré au html, marche pas

// Les variables /////////////////////////
// Le mot clé "var" était utilisé avant 2015, aujourd'hui on utilise "let"
// Pour éviter les pbs de portée et les risques d'écrasement

// Les différents types de variables
let prenom = 'Sylvain'; // xhaine de caractère "string"
let age = 40; // "number" ils peuvent être à virgule en utilisant un "." "40.5" et ils peuvent aussi être négatifs "-2"
let vivant = true; // booleén vrai "true" ou faux "false"

// il est possible de définir une variable sans lui donner de valeur
let adresse; // elle sera de type "undefined" tant qu'on ne lui a pas donné de valeur

// pour visualiser le js on utilise la console de l'inspecteur
console.log(prenom)
// Concaténation moderne ES6 (логическая связка)
console.log(`Bonjour ${prenom} vous avez ${age} ans !`);
// Autre méthode
console.log("Bonjour " + prenom + " vous avez " + age + " ans!"); // espaces dans les guillements c'est pour séparer le résultat écrit, sinon c'est bonjoursylvain etc.,; les autres espaces c'est pour la lisibilité du code
console.log('Bonjour ' + prenom + ' aujourd\'hui'); // "\" c'est le caractère d'échappement, pour échapper le caractère qui suit, sinon y a un probleme avec apostrophe et simple cote
// on peut melnger double cote et simple cote on peut melnger, mais pas mettre les mêmes dans les mêmes; alors que dans backtick `...` on peut tout mettre!

// Modification d'une variable
age = 43;
console.log(age); // suffit de la rappeler; en bleu = number

// Il est possible de créer des constantes
const taille = 185;
console.log(taille);
// la ligne suivante va créer une erreur; les erreurs js sont bloquantes, la suite du code n'est pas exécuté
// taille = 189;

// console.log(age); // js s'arrete puisque plus haut y a une erreur : on peut pas modifier la valeur d'une constante!

// les objets
let voiture = {
    couleur: `noir`,
    prix: 2500,
    finition: "standard",
    enVente: true // pas de virgule après la dernière propriété; on peut utiliser `` et "", mais mieux `` avec chaines de caracteres pour s'habituer

}

console.log(voiture);
// il est possible de modifier une propriété de l'objet
voiture.couleur = "rouge";
console.log(voiture);

console.log(voiture.couleur); // pour voir une valeur de l'objet en particulier

// Les tableaux
// Un tableau peut contenir des éléments de différent type
let monTableau = ["abc", 10, `efg`, true, 45];
console.log(monTableau);

// pour afficher "efg" (sa clé:2, parce qu'on commence à compter à partir de 0) :
console.log(monTableau[2]);

// il est possible de mettre un tableau dans un tableau
let tableau2 = [5, "test", ["element 1", 50]]
console.log(tableau2);

// Exo: afficher "element 1" :
console.log(tableau2[2][0]);

// Exo: afficher "0" :
let tab3 = [[8,[7,9,10],5],[85,12,[75,56,[0]]]];
console.log(tab3[1][2][2][0]);

//  Il est possible de déclarer plusieurs variables sur la même ligne
let var1, var2, var3;
// Par contre, il est impossible de définir une constante sans valeur
// const maConst; 
// Cette ligne retourne une erreur

// //////////////// Les opérateurs ///////////////

let nb1, nb2, nb3, nb4, nb5, nb6; // nb c'est souvent pour nombre, mais on peut appeler comme on veut

nb1 = 0 + 10; // laddition; les espaces c'est juste pour la visibilité
nb2 = 7 - 5; // soustraction
nb3 = 20 * 3; // multiplication
nb4 = 50 / 2; // division
nb5 = 5 % 2; // modulo (ce qui reste après avoir divisé 5 par 2); on l'utilise pour voir si le nombre est pair ou impair
console.log(nb5); //égale 1

nb6 = 2 ** 3; // 2 à la puissance 3 (cad 8)

console.log(`résultat de nb1 = ${nb1}`);

nb1 += 2; // c'est léquivalent de nb1 = nb1 + 2
console.log(nb1);
nb1 -= 3;
console.log(nb1); // ça fait 9

let nb7 = nb1 + "bonjour"; //"let" n'est pas obligatoire; 9 est transformé en chaine de caractères
console.log(nb7);

// nb7 += 5;
// console.log(nb7); // ça fait 9bonjour5

// nb7 -= 2;
// console.log(nb7); // ça fait "NaN" = not a number; et pareil pour nb7 = nb7 / 2, etc.

// Introduction aux fonctions //////////////
// Il faut créer une fonction pour ne pas réécrire le même code plusieurs fois
function presentation() {
    // Il est possible de rendre une variable globale mais il faut l'éviter; sinon, la variable dans une fonctione est acessible uniquement dans cette fonction et pas à l'extérieur
    let nom = `JS`;
    console.log(`hello depuis ma fonction ${nom}`);
}

// La ligne suivante ne fenctionne pas
// console.log(nom); 

// Appel de la fonction (sinon elle ne s'affiche pas)
presentation();
// parenthèses après le nom de la fonction sont obligatoires; on y mettra des parametres plus tard

// ${...} c'est pour pouvoir appeler une variable dans la chaine de caractères
function maPresentation(){
    let prenom = `Olga`;
    let age = 29;

    return `prenom : ${prenom}, âge : ${age}`;
}

// affiche "Sylvain"
console.log(prenom);

// affiche prénom: "Olga", age: 29
console.log(maPresentation());

let reponse = maPresentation();
console.log(reponse);

// Fonction avec parametre(s)///////////////////////
function presentation2(prenom){
   return `votre prénom est : ${prenom}`;
}

console.log(presentation2("Islem"));
console.log(presentation2("Toto"));
console.log(presentation2("Tom"));
console.log(prenom);
let resultat = presentation2("olga")
console.log(resultat);

function presentation3 (prenom, age) {
    return `bonjour ${prenom} tu as ${age} ans`;
}

let res = presentation3("demba", 21);
console.log(res);
// Afficher: bonjour demba tu as 21 ans

// Exo: écrire une fonction qui retourne un nombre multiplié par 2 en utilisant un paramètre

function multiParDeux(nb) {
    return nb * 2;
}

console.log(multiParDeux(8));

// créer une fonction qui prend deux params (deux nombres) et qui retourne deux résultats de la pultiplication de ces deux nombres

function multiplier(a,b){
    return a * b;
}
console.log(multiplier(2,5));
let nb8 = 78;
let nb9 = 56;
console.log(multiplier(nb8,nb9));

// L'importance de l'ordre dans le code//////////////////////////

let nbQuatre = 4;
console.log(nbQuatre);
//  Impossible d'utiliser une variable avant sa déclaration
// Si on inverse les deux lignes : ERREUR

// Pour les fonctions l'ordre n'a pas d'importance
// Mais pour que le code soit "propre et lisible", il faut déclarer les fonctions avant de les appeler
// D'habitude on a un fichier avec les fonctions, et dans un autre on les appelle

// On déclare: constantes, variables, fonctions, et ensuite on les utilise

// Introduction aux tableaux/////////////////////////

let myTab = [1,2,3,4,5];

// console.log(myTab[3]); // affiche le "4"

// Les tableaux en JS sont des objets

// pour ajouter une valeur à un tableau
myTab.push(6);
console.log(myTab);

myTab.splice(2,2,`banane`)
console.log(myTab);
// splice(indice, nbASupprimer, ajouterElement1, ajouterElement2, ...) retire des éléments du tableau et (éventuellement) les remplace
// Premier 2 : à partir de cet indice; deuxième 2 : nombre de chiffres à retirer à pertir de 2ième indice

// On applique des méthodes aux objets JS; tableau = objet; les méthodes : le nom de mon tableau.la méthode; les méthodes : Indexed collactions sur le site de MDN

// Afficher la longueur d'un tableau

console.log(myTab.length);

// Introduction aux objets /////////////////

let pays = {
    nom: `Japon`,
    population: 10000000,
    classement: 3,
    PIB: 38765,
    // il est possible de mettre un tableau dans un objet
    langues: [`japonais`, `anglais`],
    // il est possible de'avoir des objets dans un objet; on met pas "let" dans ce cas
    Hokkaido: {
        population: 500000,
        PIB: 9000
    },
    Shikoku: {
        population: 300000,
        PIB: 1200
    },
    // un objet peut avoir une ou des "méthodes" (et pas "fonctions" même si c'est la même chose)
    bonjour:function(){
        return `bonjour du Japon`;
    }
}

// afficher l'objet complet:

console.log(pays);

// afficher le nom du pays
console.log(pays.nom);

console.log(pays.bonjour());

let reponseJapon = pays.bonjour()
console.log(reponseJapon);

// Affichage de la prmière langue:
console.log(pays.langues[0]);



// Introduction au DOM (document object model) /////////////////

const titre = document.querySelector('h1');
console.log(typeof titre);

// il est possible de modifier le style depuis le js
titre.style.background = "blue";
titre.style.color = "white";


// Les écouteurs d'évènements
// Cette méthode attend deux arguments :
// 1 - un évènement à écouter
// 2 - une fonction

// titre.addEventListener('click', ()=>{
//     titre.style.background = `red`;
// })



function changeColor(color, colorTexte){
    titre.style.background = color;
    titre.style.color = colorTexte;
}

// function call-back (une fonction qui rappelle une autre fonction) Function fléché c'est le raccourci pour la fonction anonyme "function()"
titre.addEventListener('click', ()=> {changeColor("yellow", "red" )});





// const paragraphe = document.querySelector('p');

// paragraphe.addEventListener('mouseover', changeColor);


// Exo Créer un paragrphe avec la classe "red" le paragraphe doit être avec un bacground rouge au click


// function rouge(){
//     paragrapheRed.style.background = "red";
// }
// const paragrapheRed = document.querySelector('.red');
// paragrapheRed.addEventListener('click', ()=>{
//     paragrapheRed.style.background = "red";
// })



var items = [1, 2, 3]
var copie = [1, 2, 3];

items.forEach(function(item){
  copie.push(item);
});
for (var i = 0; i < copie.length; i++) {
  console.log(copie[i]);
}