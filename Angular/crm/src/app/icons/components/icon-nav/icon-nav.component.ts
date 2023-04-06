import { Component } from '@angular/core';
// importer la variable
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Décorateur
@Component({
  selector: 'app-icon-nav', // le nom du composant
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent {
  // stocker faBars dans propriété locale (icon c'est moi qui a crée, faBars pour menu burger barres horisontales fa font awsome)
  icon = faBars;

}
