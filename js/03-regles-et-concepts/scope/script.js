// ////// la portée des variables (scope) ////
let foo = "abc";

console.log(foo);

// Dans le cas ci-dessus la variable foo est globale (je peux y accèder n'importe où dans le code)

// function faa() {
//     let bar = 3;
// }

// console.log(bar);
// la ligne ci-dessus génère une erreur, car la variable bar est locle à la fonction faa()

// function faa() {
//     let bar = 3;
//     console.log(bar);
// }

// faa();

// function faa() {
//     let bar = 3;
//     return bar;
// }

// console.log(faa());

function faa() {
    let bar = 3;
    return bar;
}

let result = faa();
console.log(result);


