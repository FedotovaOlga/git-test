$(function(){
// manupulation du DOM avec jQuery

// .text()
// en getter
let result = $('.para');
console.log(result.text());
// en setter
// les balises HTML ne sont pas recconues
result.text('Nouvelle <span>valeur</span> de mon paragraphe');


// Pour ajouter du HTML -> .html()
$('.para2').html('Nouvelle <span>valeur</span> de mon paragraphe 2')

//  Insérer des éléments
// .append() -> insérer à la fin
$('#film h3').append('****');
// .prepend -> ajouter au début
$('#film h3').prepend('****');

// .before -> ajoute un élément avant 
$('#film h3').before('<h2>film présent à l\'affiche</h2>'); // si une seule fois : h3:first ou aller chercher une classe ou autre chose
// .after -> ajoute un élément après 
$('#film h3').after('<h5>histoire:</h5>');

// remplacer des éléments
// .replaceWith()
// $('#film h3').replaceWith('<h4>coucou</h4>'); // quand on remplace un élément, on perd son contenu (même si on met pas "couou", si on met juste <h4>, on n'a plus les noms des films qui étaient dans les <h3>)

$('#film h3').each(function(){
    $(this).replaceWith('<h4>' + $(this).text()); 
}) // donné par Sylvain

// $('#film h3').each(function(){
//     $(this).replaceWith(`<h4>${$(this).text()}`);
// }) // donné par Sylvain mais avec syntaxe backtiques (deux dollars du coup)
 

// $('#film h3').replaceWith(function() {
//     return '<h4>' + $(this).text() + '</h4>';
//   }); // généré avec chat GPT



















    
})  //////////////////////////////////////////