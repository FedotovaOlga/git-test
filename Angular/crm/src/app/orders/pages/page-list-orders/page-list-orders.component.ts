import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {

  // public = accessible depuis le template html
  public title: string = 'Page List Orders';

  // créer une propriété disponible partout dans l'HTML
  public tab!: Order [];

  // créer un tablau de headers: string []
  public headers : string [] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];



  // injecter un service orders
  constructor(private ordersService: OrdersService ){
    console.log(this.ordersService.sumUp(1, 2));

    // déclencher getDatas() du service (faut déclencher une nouvelle méthode .subscribe)
    this.ordersService.getDatas().subscribe(data=>{
      console.log(data);
      this.tab = data;
      console.log(this.tab);

    });

  }

  // créer méthode pour calculer montant HT et TTC

//   public total(val: number, coef: number, tva ?: number): number{ // coef c'est pour le nombre e jours; tva ? parce que cette méthode attend 2 ou 3 arguments (tva on va la passer pour TTC ou pas pour HT)
// console.log('déclenché');


//     if (tva) return val * coef * (1 + tva/100); // TTC
//     // 1200 x 3 x 1.2° (1.20 = 20% de la tva)
//     return val * coef; // (HT)
//   }

// cette méthode est remplacée par le pipe total
}


