$(function(){
    // l'événement click
$('#btn').on('click', function(){
    $('h2').toggleClass('blue'); // toggle() tout court - va cacher le titre quand on appuie dur le bouton (display:none) de l'élément "h2"
});

// Au click sur un li, faire apparaitre une boîte d'alerte avec le texte
$('li').on('click', function(){
    alert(`Vous avez cliqué sur : ${$(this).text()}`)
})

// Regarder la doc de l'évenement scroll !!!! Sylvain va envoyer ça à Owen qui transmettra au groupe

// Pour limiter l'utilisateur dans la quantité du texte saisi dans un champs de formulaire
let tweetBox = $('#tweet-content');
let compteur = $('#counter'); //// revenir voir comment ajouter la décompte dans le champs de saisie!! Sylvain va mettre dans le cours complet. !!!!

tweetBox.on('keyup', function(){
    let decompte = 140 - tweetBox.val().length;
    compteur.text(`il vous reste ${decompte} caractères`);
    if (decompte == 0){ // il faut absolument commencer par 0 ici, parce que si on commence par la condition suivante (<=10), ça marchera pas, car elle sera 'true' et elle sera la seule prise en compte.
        tweetBox.attr('disabled', 'true');

    }else if (decompte <= 10){
        tweetBox.css('color', 'red');
    }
    else{
        tweetBox.css('color', 'black');
    }
});

// événement au survol
$("#mario2").on('mouseover', function(){
    $(this).attr('src', 'img/mario2Grand.jpg')
})
$("#mario2").on('mouseout', function(){
    $(this).attr('src', 'img/mario2.jpg')
})

$('#mario3petit').on('mouseover', function(){
    $(this).fadeOut(1000);
    $('#mario3grand').fadeIn(1000);
})
$('#mario3grand').on('mouseout', function(){
    $(this).fadeOut(1000);
    $('#mario3petit').fadeIn(1000);
})

// dans les accolades il faut metter les deux points, et pas virgule (clé:valeur) {clé:valeur} (syntaxe type objet) function - y a accolades aussi mais c'est qutre chose.

// l'appelant = le contexte, l'objet dans lequel je suis
////////////////////////////////
})