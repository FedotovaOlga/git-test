const myObj = {
    prenom: "olga", // propriété de l'objet
    age: 29,
    presentation(){ // méthode
        // console.log(`Bonjour tout le monde, je m'appelle ${prenom}`); // ça marche pas parce qu'il va chercher variable prenom qui n'existe pas
        console.log(`Bonjour tout le monde, je m'appelle ${this.prenom} et j'ai ${this.age} ans`); // pour rappeler dans un objet une propriété de ce même objet, il faut utiliser le mot clé "this". This fait appel au contexte appelant (dans ce cas l'objet myObj)
        
    }
}

myObj.presentation();

const btn = document.querySelector('button'); // let est possible aussi, mais on va pas modifier l'objet 'button' en lui même (contrairement à ses propriétés), c'est pourquoi on utilise const


btn.addEventListener('click', () =>{
    console.log(this); // this est le contexte appelant (le parent, cad document au dessus)
})


btn.addEventListener('click', () =>{
    console.log(btn); // appelle le bouton
})
