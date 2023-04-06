$(function(){

// les selecteurs

// pour sélectionner une balise
$('span').css('color', 'purple');

// Pour sélectionner un ID
$('#titre').css('color', 'red');

// pour les classes 
$('.sousTitre').css('color', 'blue');

// Selection de plusieurs éléments
$('#titre, h2, span').css('textDecoration', 'underline');

// Sélectionner les enfants d'un élément

$('ol li').css('fontStyle', 'italic').css('fontSize', '3rem');

// Enfant direct
// tous les li descendant directement de ol
$('ol > li').css('color', 'red');

// les filtres

// le premier paragraphe -> jaune
$('p:first').css('color', 'yellow');
// le dernier paragraphe -> rouge
$('p:last').css('color', 'red');
// le nth (seve-nth, c'est comme index, n-ième) paragraphe -> vert 
$('p:eq(1)').css('color', 'green');
// Element d'index pair
$('p:even').css('textDecoration', 'underline').css('color','blue'); // c'est le dernier qui parle qui a raison; aussi, le fichier javascript repmorte par rapport au fichier css
// Element d'index impair
$('p:odd').css('textDecoration', 'line-through');

// Parcourir les éléments sélectionnés avec la boucle .each()
$('.impair').each(function(){
    this.textContent += ' est un chiffre impair'; // this : l'objet (.impair)
});
// la méthode each() passe en revue les éléments selectionnés par une requête jQuery et permet de les modifier





// //////////////////////////////
});