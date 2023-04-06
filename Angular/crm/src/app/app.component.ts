import { Component } from '@angular/core';

// décorateur
// C'est ici qu'on fait le lien entre le fichier ts et les autres fichiers
// head
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // propriété = variable
  title: string = 'Titre'; // ts comprend que c'est string, donc pas besoin de l'indiquer
  // elementCible.innerHTML = title (pas besoin ici)

  constructor(){
    // this.title = 2;
  }

// créer une propriété en boolean
  open = false

  // ici ça s'appelle une méthode; on peut pas ajouter le mot clé function
  onClick(){
    console.log('cliqué');
    // if (pas ça)
    // operateur ! (négation) = js
    this.open = !this.open
    console.log(this.open);
  }



} // NE RIEN ECRIRE APRES CETTE LIGNE

// index.html => script.js + style.css
