// console.log(y);
let y = 152;
// le log retourne une erreur
// uniquement depuis la création de l'ES6 (dernière version de JS) il faut déclarer les const et variables (let) avant de les utiliser

// Par contre, les fonctions peuvent être appelées avant d'être définies (mais vaut mieux pas le faire)

foo();

function foo(){
    console.log("hello world");
}

// Les lignes fonctionnent mais le code n'est pas propre

const test = function(){
    console.log('hello test');
}
// Si on enregistre notre fonction dasn une constante, il faut obligatoirement la déclarer avant de l'appeler