// Il faut obligatoirement attendre que jQuery soit chargé avant de l'utiliser

// Il existe trois syntaxes différentes
// 1. (version longue) :
jQuery(document).ready(function(){
    // ici le DOM et jQuery sont chargés
});

// 2.
$(document).ready(function(){
    // ici le DOM et jQuery sont chargés
});

// 3. (version courte) :
$(function(){
  // ici le DOM et jQuery sont chargés



//   Fin du jQuery
//   //////////////////////
});
// ne pas faire de traitement jQuery ici (ni rien d'autre parce qu'on mélange pas vriament du JS natif avec du jQuery)