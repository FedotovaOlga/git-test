// //////// Les cmparaisons/////////


// les test

const nb = 50;

if(nb > 20){ // si le test est vrai, on fait le traitement
    console.log("la condition est vérifiée");
}

if (nb < 20) // faux donc la ligne 13 n'est pas lue
{
    console.log("condition vérifiée");
}

let nb1 = 10; // un seul égal : on assigne une valeur à une variable
let nb2 = 40;

if (nb1 == nb2) { // le test renvoie faux (false)
    // quand on test une égalité, c'est == (double égal minimum); ou même mieux en mettre 3 ===
    console.log("10 est égale à 40");
}

// La condition est fausse donc le consolelog n'est pas fait

nb1 = 40;

if (nb1 == nb2) { // il faut refaire un nouveau test
    console.log("40 est égale à 40");
}

// les inégalités et égalités stricte

nb1 = "40";
if (nb1 == nb2) {
    console.log("nb1 = nb2 en valeur");
}

if (nb1 === nb2) {
    console.log("nb1 et nb2 ne sont pas du même type, cette ligne ne s'affichera pas");
}

if (nb1 !== nb2) { // c'est strict, on test type et valeur (!= c'est juste valeur)
    console.log("les deux variables sont différentes");
}

if (nb1 != nb2) { // ne s'affichera pas, car nb2 n'est pas différent de nb2
    console.log("les deux variables ont la même valeur");
}

// Les suites de condition //////////

const nb3 = 150;

if (nb3 == 100) {
    console.log("nb3 est égale à 100");
}else if (nb3 > 100) {
    console.log("nb3 est sup à 100");
}

//  Il est possible de mettre autant de else if que nécessaire
// Par contre, il faut toujours terminer par un else (tout court)
const nb4 = "cent";
if (nb4 == 100) { // la condition est fausse
    console.log("nb4 est égale à 100");
}else if (nb4 > 100) { // la condition est fausse
    console.log("nb4 est sup à 100");
}else if (nb4 < 100) { // la condition est fausse
    console.log("nb4 est inf à 100");
}else{ // tous les autres cas
    console.log("aucune des conditions testées");
}

//  Attention à l'ordre des conditions

const nb5 = 1500;

if (nb5 > 1000) {
    console.log("nb5 est sup à 1000");
}else if (nb5 == 1500) {
    console.log("nb5 est égale à 1500");
}else {
    console.log("autre");
}

console.log("la suite du code");

const nb6 = 2500;

if (nb6 == 2500) {
    console.log("nb6 = 2500");
}else if (nb6 > 1000) {
    console.log("nb6 sup à 1000");
}else {
    console.log("autre");
}

// Les conditions complexes

// Utiliser les opérateurs logiques: && pour ET, || pour OU (alt gr + 6) ("double pipe")
// le ET pour tester si plusieurs conditions sont vrai

// Les ET && va tester que toutes les conditions soient vrai
if (nb6 > 1500 && nb6 < 3000) {
    console.log("nb6 est compris entre 1500 et 3000");
}else {
    console.log("nb6 n'est pas compris entre 1500 et 3000");
}

// Les OU || va vérifier qu'au moins une des conditions soit vrai
if (nb6 == "toto"  || nb6 > 1500) {
    console.log("une des conditions est vrai donc ok");
}

// Variable-booleen

let faim = true;
// je ne suis pas obligé d'écrire if(faim == true)
if (faim) {
    console.log("ou j'ai faim");
}else if (!faim) { // je teste si faim est false
    console.log("j'ai pas faim");
}

// Les valeurs booléennnes en JS
const bool1 = 0; // renvoie false
const bool2 = null; // renvoie false
const bool3 = undefined; // renvoie false
const bool4 = NaN; // renvoie false
const bool5 = false; // renvoie false
const bool6 = -0; // renvoie false

// tout le reste renvoi "true"

let chiffre = 15;
let mot = "toto";
let resultat = chiffre*mot;
console.log(resultat); // renvoie NaN

if (!resultat) {
    console.log("resultat est faux");
}

if (!nb6) {
    console.log("nb6 est false");
}else if (nb6 == 2) {
    console.log("2");
}else if (nb6 == 3) {
    console.log("3");
}else if (nb6 == 4) {
    console.log("4");
}else if (nb6 == 5) {
    console.log("5");
}else {
    console.log("aucune de ces valeurs");
}

// Dans le cas où nous avons beaucoup de else if, il faut utiliser le switch
switch (nb6) {
    case "2":
        console.log("2");
        break;
    case "3":
        console.log("3");
        break;
    case "4":
        console.log("4");
        break;
    case "5":
        console.log("5");
        break;
    default:
        console.log("aucune de ces valeurs");
        break;
}

// Si on met pas le break, il va afficher plusieures conditions vraies, ou une vraie + celle qui est defaut

let couleur = "noir";
let premiereLettreCouleur = couleur.charAt(0).toUpperCase();
let finCouleur = couleur.slice(1).toLowerCase(); // slice: entre paranhtèses on met indice de début, fin n'est pas nécessaire parce que c'est tout jusqu'à la fin
couleur = premiereLettreCouleur + finCouleur;
console.log(couleur);

// On remarque que JS est sensible à la casse (minuscule/majuscule)
// Exo: rechercher comment entrer dans le bon case même si la première lettre n'est pas en majuscule, sans modifier le switch
switch (couleur) {
    case "Orange":
        console.log("prix : 19.99 €"); 
        break;
    case "Bleu":
        console.log("prix : 15.99 €");
        break;
    case "Noir":
        console.log("prix : 9.99 €");
        break;
    default:
        console.log("Désolée, cette couleur n'est pas dispo");
        break;
}


// Les Ternaires
// if moderne

let prix = 500;

// Afficher "premium" si prix est sup à 200 ou "basique" si prix est inf à 200
if (prix > 200) {
    console.log("premium");
}else{
    console.log("basique");
}
// même chose en ternaire
let choix = prix > 200 ? "Premium" : "Basique";
console.log(choix);

// Exo
let beauTemps = true;

// let tempsEnCours = beauTemps == true ? "il fait beau" : "il ne fait pas beau";  // version plus longue

let tempsEnCours = beauTemps ? "il fait beau" : "il ne fait pas beau"; // version rapide; pas besoin de mettre ""== true" pour les booleens
console.log(tempsEnCours);

// Exo : Afficher avec un console.log il faut beau ou il ne fait pas beau en fonction de la variable beauTemps


// il est possible de mettre une ternaire dans une expression
console.log(`vous avez choisi un produit ${prix > 200 ? "Premium" : "Basique"}`);

// //////////// Les boucles ///////////
// La boucle for

let nb8 = 50;
console.log(nb8);
// incrementation (=ajout de qch à un élément увеличение)
nb8 +=1;
console.log(nb8);
nb8 ++; // la même chose que +=1
console.log(nb8);
nb8 ++;
console.log(nb8);

// Pour faire la même chose avec une boucle
console.log("avec boucle for");

for(let i = 50; i <= 55; i++){ //i+=2 pour ajouter 2
    console.log(i);
}

for(let i = 0; i <= 5; i++){
    console.log(nb8);
} // affiche nb8 6 fois car on commence par 0

// Exo afficher de 100 à 123 dans la console avec la boucle for

for (let i = 100; i <= 123; i++) {
    console.log(i);
}
// Itérer = se déplacer dans un tableau; répéter des actions

let i = 10;
for (i = 10; i >= 0; i--){
    console.log(i);
}
console.log(`valeur de i après la boucle est : ${i}`); // affiche i = -1 car on est sorti de la boucle; j'ai dû commenter la ligne 337 pour que ça marche (là bas je déclare let i=10; et ça marchait pas parce que y avait une erreur, et quand y a une erreur, JS s'arrête. Et y avait une erreur parce que le i déclaré était local à ma fonction)


// Boucle sur un tableau
let tab1 = ['banane', 'kiwi', 'orange', 'raisin', 'pomme', 'cerise'];

// Afficher chaque élément du tableau dans la console

for (let i = 0; i < 5; i++) {
    console.log(tab1[i]);
}

// Même chose avec la longueur du tableau

let longueurTab = tab1.length;
console.log(longueurTab);

for (let i = 0; i < tab1.length; i++){
    console.log(tab1[i]);
}

// Sur les tableaux il est possible d'utiliser la boucle "for of" (existe dans plsieurs languages)
console.log("avec for of");

for(const fruit of tab1){
    console.log(fruit);
}

// foreach (existe que en JS; permet de donner l'indice de chaque element en plus)

console.log("avec foreach");

// tab1.forEach(function(fruit, index) {
//     console.log (`le fruit Numéro ${index} est : ${fruit}`)
// }); // fonction fléché c'est la même chose que function anonyme, c'est juste plus court

tab1.forEach((fruit, index) => { // ici il faut rajouter les paranthèses si y a plusieurs paramêtres (fruit, index), sinon ça marche pas
    console.log (`le fruit Numéro ${index} est : ${fruit}`)
});

// En JS la boucle for of ne fonctionne pas sur les objets
// Il faut uriliser la boucle for in

const tesla = {
    couleur: "grise",
    portes: 6,
    prix: 45000
}

for (const key in tesla) {
    // console.log(key);
    // console.log(tesla[key]);
    console.log(`${key} : ${tesla[key]}`);
}
// Attention : dans une boule for in  pour accéder à la valeur d'une propriété on utilise les crochets et pas un point.
// En dehors on peut utiliser les deux syntaxes suivantes :
console.log(tesla.prix);
console.log(tesla["prix"]); // ces deux lignes affichent la même chose

console.log("prix : " + tesla.prix); // pour afficher "prix : 45000"

// Exo : afficher uniquement le nom d'une propriété d'un objet
// console.log(xxx) // Affiche "portes"

console.log(Object.keys(tesla)[1]); // pour toutes les afficher (toutes les props), il suffit de enlever 1 entre coroichets et la   isser juste tesla

// La boucle while

// // si la sauvegarde auto de vscode est activé désactivé la
// let i = 10;
while (i >=0){
    console.log(i);
    i--;
}
// // la boucle do while

i = -1;
do{
    console.log(i);
    i--;
}
while(i >=0);
// la boucle do while n'est quasiment jamais utilisé car peut importe la codition du while, le traitement est fait au minimum 1 fois (parce que la condition vient à la fin)



// while(true){
//     console.log("test");
// }
// le code ci-dessus est une boucle infini

// Exo boucler sur le tableau suivant en utilisant
//  1- Une boucle for
//  2- Une boucle for of
//  3- foreach
//  4- avec while

let tab7 = ["chien", "chat", "elephant", "souris"];

console.log("avec for");
// votre boucle

for (let i = 0; i < tab7.length; i++) { //pareil que <=tab7.length-1 ; parce que c'est meix quand on a un trop grand tableau, on a pas à compter
    console.log(tab7[i]);
}


console.log("avec for of");
// votre boucle

for(const animal of tab7){
    console.log(animal);
}

console.log("avec foreach");
// votre code



tab7.forEach((animal, index) => { 
    console.log (`l'animal Numéro ${index} est : ${animal}`)
});
// ou bien (animal + " numéro " + index)

console.log("avec fonction fléchée");
tab7.forEach(animal => 
    console.log (animal));

console.log("avec fonction anonyme");
    tab7.forEach(function(animal){
        console.log(animal);
    })

//     console.log("avec boucle while");

let j = 0;
while(j < tab7.length){
    console.log(tab7[j]);
    j++;
}

// Version dali
function boucleWhile(tab){
    let i = 0;
    while(i < tab.length){
        console.log(tab[i]);
        i++;
    }
}
console.log("version avec fonction maison while"); //// pourquoi maison 
boucleWhile(tab7);

tab8 = [1,5,8,9];
boucleWhile(tab8);

// Le mot-clé "break" (on a déjà vu dans switch) pour arrêter une boucle!
for(let i= 0 ; i<=10; i++){
    if(i === 4){
        break;
    }
    console.log(i);

} // si on met if etc apres console log, ça affichera jusqu'à 4, sinon jusqu'à 3

let legumes = ["carotte", "choux", "salsifi", "petit pois", "navet"]

for(let i= 0 ; i<= legumes.length-1; i++){
    if(legumes[i] == "salsifi"){
        console.log("melina a des gouts etranges");
        break;
    }
    console.log(legumes[i])

} 

// Le mot clé "continu" (permet de "sauter" un élément du tableau, comme ici "salsifi")

for (let i = 0; i <= legumes.length-1; i++){
    if (legumes[i] == "salsifi"){
        continue;
    }
    console.log(legumes[i]);
}

// //////////// Try / Catch//////


// console.log(dkfjgkfj);
// la ligne ci-dessus va génerer une erreur et stopper mon script. Le prochaine console.log ne marchera pas
// console.log(legumes);

try{
    console.log("début du test");
}catch(error) // = erreur (ou "e" "err" "erreur" ou "error" ou "toto")
{
    console.log(error);
}

console.log("apres mon try catch");

try {
    fonctionQuiMarchePas();

} catch (error) {
    console.log("Une erreur s'est produite (détail de l'erreur : " + error + ")");
}

// try {
//     fonctionQuiMarchePas();
// } catch (error) {
//     console.log(`blabla (prigine de l'erreur: ${error})`);
// } // La même chose mais écriture en backtick



console.log("apres mon try catch 2");

// si on récupére du code ailleurs, on peut mettre le Try/Catch pour que si jamais le code d'ailleurs ne marche pas (serveur en panne etc), l'utilisateur aura un message d'erreur personnalisé (pour connexions aux bases de données ou appels aux API, par ex météo)

// Exo mini-tp
// créér une fonction qui sert à repérer si un texte passé en argument contient la lettre "z".
// SI c'est le cas, la fonction écrit dans la consigne "Le texte contient la lettre "z"


// function containsZ(mot) {
//     return mot.includes('z');
//   }

//   let mot = 'totoZ';
//   console.log(containsZ(mot)); // affiche true

//plus bas çapeut aider

function testZ(maChaine) {
    maChaine = maChaine.toLowerCase();
    for (let i = 0; i <= maChaine.length-1; i++){
        // Première méthode, avec 2 "if" z Z
    //     if (maChaine[i] == "z"){
    //         console.log(`Le texte contient la lettre "z"`);
    //     }

    //     if (maChaine[i] == "Z"){
    //         console.log(`Le texte contient la lettre "Z"`);
    // }

    // Seconde méthode plus rapide
   
    if(maChaine[i] == "z"){
        console.log("la chaine contient un z");
    }
    }
}
// on peut rien mettre entre for et if

// Appels de fonction pour test
testZ('toto'); // Affiche rien

testZ('totZo'); // Affiche  "Le texte contient la lettre "z" "
testZ("sdfjsdfhbz"); // Affiche  "Le texte contient la lettre "z" "


function testZWithIndexOf(maChaine){ // le parametre est local à ma fonction, il existe pas ailleurs
    maChaine = maChaine.toUpperCase();
    let resultat = maChaine.indexOf("Z"); 
    // console.log(resultat); ça renvoie l'index (la position) de z
    // il faut mettre Z maj ici, parce qu'on transforme tout toUpperCase
    if(resultat != -1){
        console.log("il y a un z");
    }
}

testZWithIndexOf("abczd");


// troisième méthode includes

function testZWithIncludes(str){
    str = str.toLowerCase();
    let result = str.includes("z");
   if(result){
    console.log("il y a un z dans str");
   }
}

testZWithIncludes("kjnzm");
testZWithIncludes("djkfngkjnzj");

// Question Bonus:
// compter le nombre de z


let myStr = "djfzgkdzfgzkjn";
// myStr = myStr.toLowerCase(); // faut pas mettre let quand on modifie la valeur de la variable; let c'est juste pour l'initialisation de la variable, 1 seule fois
let result = myStr.toLowerCase().split('z');
// console.log(result); // retourne un tableau : la chaine coupé là où y a les z (et ça enleve les z)

console.log(`il y a ${result.length-1} z dans la chaine`); // et si y a pas de "z", il va dire "il y a 0 z dans la chaine" ! 




