const images = document.querySelectorAll('img');
const contenu = document.querySelector('.container');

// for(image of images){
//     image.classList.remove('border');
// } // faut pas mettre le point

const img = document.querySelectorAll('.taille');

img.forEach(element => {
    element.addEventListener('click', () =>{
    element.classList.toggle('border'); // appel de la fonction "selection"
    selection();
    })
})
// On peut faire la même chose avec des boucles différentes

// Fonction pour compter le nombre de photos sélectionnées

function selection() {
    let nbImagesClassBorder = document.querySelectorAll('.border').length; //on peut mettre const ou let, ici peu importe; length = longeur du tableau, car querySelector créé un tableau; et les img sélectionnées ont des bordures
    let spanSelec = document.querySelector('#nbSelec');
    spanSelec.textContent = nbImagesClassBorder;
}

// reprendre le TP et voir si on peut pas simplifier (taille _ image la meêm chose)