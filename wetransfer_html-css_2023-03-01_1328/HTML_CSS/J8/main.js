/* function addition(nombreA, nombreB) {
    if (nombreA < 0) {
        // si on fait * -1 à un nombre, il passera dans la dimension opposée
        // si le nombre est négatif, il deviendra positif
        // si le nombre est positif, il deviendra négatif
        nombreA = nombreA * -1;
    }
    if (nombreB < 0) {
        nombreB = nombreB * -1;
    }
    return nombreA + nombreB;
} */

function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

let a = -12;
let b = 90;

console.log(addition(a, b))