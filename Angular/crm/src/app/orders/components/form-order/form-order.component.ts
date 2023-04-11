import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {

  public form!: FormGroup; // propriété créé mais non initialisée

  // convertir enum en tableau
  public stateOrder = Object.values(StateOrder);

  // etape: créer un objet du type  Order
  public item: Order = new Order();

  // Ici on injecte le service OrdersService pour pouvoir déclencher la méthode add()
  constructor(private fb : FormBuilder,
    private ordersService: OrdersService,
    private router: Router
    ){}

  public onSubmit (){
    console.log(this.form.value);
    // méthode: POST
    // envoyer this.form.value dans ma bdd (base de données) avec la méthode POST
    this.ordersService.add(this.form.value).subscribe(data=>{
      console.log(data);
    // redirection vers accueil (page-list-orders)
    this.router.navigate([""]) // c'est vite car on veut retourner à la page d'accueil

    });


  }

// décrire le contenu du form
// On va créer un objet, et dans cet objet, on va créer des propriétés pour chaque input, on donne des valeurs par défaut
// associer les propriétés aux inputs dans HTML
ngOnInit(){
// méthode spécifique à Angular qui sert à déclencher du code juste apres que je constructor est déclenché
this.form = this.fb.group({
  tjmHt: [this.item.tjmHt],
  nbJours: [this.item.nbJours],
  tva: [this.item.tva],
  state: [this.item.state], // OPTION par défaut
  typePresta: [this.item.typePresta],
  client: [this.item.client],
  comment: [this.item.comment],
  id: [this.item.id],

})
}



  // au clic sur le btn la méthode onSubmit() est déclenchée

}
