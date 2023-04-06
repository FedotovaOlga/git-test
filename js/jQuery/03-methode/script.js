$(function(){
// les méthodes jQuery
// On appelle méthode jQuery (ce sont les fonctions disponibles sur les objets jQuery)
/*
Syntaxe
1-> sélection d'une élément avec $('')
2-> on ajoute un point $('').
3-> le nom de la méthode $('').nomDeLaMethode

les méthodes jQuery peuvent être utilisées en "getter" ou/et en "setter"
getter -> to get : obtenir, c'est une méthode de lecture
setter -> to set : définir, méthode d'écriture
*/

// la méthode .css() -> appliquer ou récupérer un style
// en mode setter
$('#titre').css('textDecoration', 'underline');
// en mode getter
console.log($('#titre').css('color'));

// tout ce qui est en bleu clair en HTML sont des attributs des elements HTML (href, src, width, class, ifd, etc.)

// .atter() -> retourne ou modifie les attributs d'un élément
// getter
console.log($('#lien a').attr('href'));
// setter
$('#lien a').attr('href', 'https://google.com');

// afficher le href dans une boîte de dialogue alert
// alert($('#lien a').attr('href'));

$('#logo').attr({
    alt: 'logo jQuery', // ajout du texte alternatif
    width: '50px'
})

// Supprimer des attributs
$('#docJquery').removeAttr('href');

// Méthode sur les classes
// id : faut utiliser le moins possible (en css, js, partout): bouton remonter vers le haut, gros container, gros blocks (pour bootstrap); formulaires; sinon, le plus possible utiliser des classes
// addClass() -> ajouter une ou plusieurs classes

$('#rvb li:first').addClass('vert grand');
// Enlever une classe
$('.jaune').removeClass('jaune').addClass('vert');
// ajouter si pas présent et enlever si présent : toggle()
$('#rvb li:eq(2)').toggleClass('rouge').css('textDecoration', 'underline'); // pour sélectionner cette class, on ne peut pas mettre '.rouge', parce que cette class n'existera plus dans html quand le toggle va l'enlever


// tester la présence d'une classe : hasClass() -> uniquement getter
console.log($('#bleu').hasClass('bleu')); // true si oui, sinon false

// .val() -> tester/modifier la valeur des champs, de formulaire
$('#nom').val('Michel');
$('#pass').val('abc');
$(':radio').val(['H']); // radio: un peu comme un tableau
$('#fonction').val('ingenieur');

// toutes les autres méthodes: https://api.jquery.com/






///////////////////////////////////

})