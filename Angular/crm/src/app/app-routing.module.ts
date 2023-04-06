import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

// Ici on va définir des routes
// Tableau de routes
// Chaque route est un objet
const routes: Routes = [
  {path: '', component: PageListOrdersComponent },
  {path: 'add', component: PageAddOrderComponent },
  {path: 'edit', component: PageEditOrderComponent },

  {path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then(
        (m) => m.ClientsModule
      ),
  },
// lazy loading sur le module clients
// tester dans le navigateur (partie network)
// ajouter service + appel http
// afficher le tableau de clients dans la console
    {path: '**', // cette route il faut toujours mettre en dernier! sinon celles qui sont plus haut ne seront pas lues
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  // {path: '**', component: PageNotFoundComponent} // "**" => route qui n'existe pas (err 404) ; mais ça c'est pas du lazy loading!
];

// charge le module pagenotfound que si l'utilisateur emprunte une route qui n'existe pas
// créer module => composant => pagenotfound
// lazy loadinf = on ne charge le module que si besoin



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    this.router.config // pour obtenir tableau de route
    console.log(this.router.config, 'tableau de routes');
  }
 }
// afficher le tableau complet des routes (ce fichier et sous-fichiers)
// injecter/utiliser une fonctionnalitée de Angular qui s'appelle routeur

