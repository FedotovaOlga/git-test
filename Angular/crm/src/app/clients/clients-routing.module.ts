// sous-fichier de routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

const routes: Routes = [
  {path: "", component: PageListClientsComponent},   // On est déjà sur la route clients (path) , donc pas besoin de le mettre ici
  {path: "add", component: PageAddClientComponent},
  {path: "edit", component: PageEditClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}

