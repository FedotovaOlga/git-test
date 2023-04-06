import { Component } from '@angular/core';
import { ClientsService } from '../../service/clients.service';
import { Order } from 'src/app/core/models/order';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent {
public title: string = 'Page List Clients';

public tab!: Client [];

public headers: string [] = [
  'Action',
  'Etat',
  'tva',
  'name',
  'total CA HT',
  'total TTC',
  'Comment',
];

// injecter un service clients

// service c'est toujours private = on pourra pas utiliser cette propriété dans html
constructor(private clientsService: ClientsService){
console.log(this.clientsService.sumUp(3,4)); // pq this?

// déclencher getDatas() du service (faut déclencher une nouvelle méthode .subscribe)

this.clientsService.getDatas().subscribe(data=>{
  console.log(data); // ici on a dit "data" mais on peut mettre ce qu'on veut (données par ex.)
  this.tab = data;
  console.log(this.tab);
});

}

}
