// Asynchrone

// 1. setTimeOut et setInterval

function presentation(){
    console.log('hello');
}

const timeOut = setTimeout(presentation, 10000); // des millisecondes
console.log('toto'); // ça va être fait dès le départ, et le reste sera fait ensuite
const time1 = setTimeout(presentation, 2000);

// clearTimeout(time1); // ça efface un timeOut

let compteur = 0;

const intCompteur = setInterval(plusUn, 1000);
// clearInterval

function plusUn(){
    compteur++;
    console.log(compteur);
}

// Exo: stopper le console.log du compteur quand il arrive à 10

setTimeout(()=>{
    clearInterval(intCompteur);
}, 10000)

// On créé ici espece de caroussel avec 3 images qui tournent:
let i = 0;
let imgTab = ['1.jpg', '2.jpg', '3.jpg'];
function changeImg(){
    document.querySelector('img').src = "img/"+imgTab[i];
    if(i < imgTab.length -1){ // -1 parce que longueur c'est 3, mais indices d'images c'est 0 1 et 2
        i++; console.log(i);
    }else{
        i=0;
    }
}
const turnImg = setInterval(changeImg,2000);



// Utilisation d'une API
// https://api.le-systeme-solaire.net/rest/bodies/
const btnAstre = document.querySelector('.astre');
const astreList = document.querySelector('.astreList');

// Je veux me connecter à l'API uniquement au click sur le bouton "Rechercher"



// Je souhaite récupérer uniquement les planètes et les ordonner de la plus proche à la plus lointaine

// https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true&order=aphelion,asc

async function listeAstres(){
    const result = await fetch('https://api.le-systeme-solaire.net/rest/bodies/?filter[]=isPlanet,eq,true&order=aphelion,asc'); //xmlhttprequest c'est la méthode ancienne pour aller chercher qch, maintenant c'est fetch
    console.log(result);
    let data = await result.json();
    console.log(data);
    // Exo faire un console.log du nom de la première planète

    // console.log(data['bodies'][0]["id"]);
    //  console.log(data.bodies[0].id); // deuxième syntaxe
    // On veut afficher les infos de chaqu planete donc on boucle
     const listPlanet = data.bodies;
    for (let i=0; i<listPlanet.length;i++) {
        // console.log(listPlanet[i].name); // à la place de name on peut aussi mettre une propriété, par ex. id; syntaxe peut être aussi [i] ["name"]
        let newLi  = document.createElement('li');
        newLi.innerText = listPlanet[i].name; // on peut aussi mettre innerHTML si y a des balises HTML à l'intérieur (?) Ici texte est plus propre car y a pas de balises HTML à l'intérieur
        astreList.appendChild(newLi); //append pour ajouter (ou "attacher") un nouvel élément-enfant à son parent
    }
    btnAstre.removeEventListener('click', listeAstres);
}
btnAstre.addEventListener('click',listeAstres);

// data est un objet, bodies est une propriétyé esi est elle même un tableau. C'est pour ça que . ou [], mais dans une boucle c'est que [] quimarche)

// for (let i = 0; i < tab1.length; i++){
//     console.log(tab1[i]);
// }
// On a fait async - await pour faire attendre, le temps que le navigateur reçoit les données de l'API qu'on utilise

// statut 200 dans Network = c'est que tout marche bien


// On peut aussi, plutôt que de donner un url vers une api, créer un fichier data.json où on va mettre toutes nos infos comme dans un tableau (regarder exemple de la lune ou un exemple sur internet (mdn https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON)), ce sera plus simple que d'aller modifier chaque fois dans HTML des informations; dans ce cas au lieu du lien http on met notre fichier ('data.json')


// Affichage des supers heros
const btnHero = document.querySelector('.hero')
const heroList = document.querySelector('.heroList')


// Ici je déclare la fonction pour rechercher et insérer dans le DOM les super heros
const insertHero = async function (){
    const result = await fetch ('data.json');
    console.log(result);
    const data = await result.json();
    console.log(data.members);
    for (let i = 0; i < data.members.length; i++) {
        const newLi = document.createElement('li');
        newLi.innerText = data.members[i].name;
        heroList.appendChild(newLi); // "appendChild" c'est une méthode, donc il faut pas mettre "=", mais mettre le parametre entre parenthèses
    }
    btnHero.removeEventListener('click', insertHero)
}
btnHero.addEventListener('click',insertHero)

// Ici j'appelle ma fonction avec un ecouteur sur le click du bouton btnHero



var calculIMC = function(poids, taille) {
    return poids / (taille * taille);
    };
calculIMC(81);
