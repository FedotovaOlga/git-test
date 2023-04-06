import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI { // implements = utilise l'interface
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string; // "!" veut dire qu'on ne veut pas l'initialiser
  client!: string;
  comment!: string;
  id!: number;
  // lister des propriétés et donner des valeurs par défaut
  constructor(obj?: Partial<Order>){ // obj? permet de récupérer les propriétés par défaut sans les renseigner à l'intéreiur de new Order(), et peut être pas complet
    if(obj){
      // si obj existe, alors on crée un objet
      // méthode javascript pour fusionner deux objets (celui que l'utilisateur vient de créer et celui par défaut)
      Object.assign(this, obj)
      // this = notre target, les valeurs par défaut qu'on veut écraser; obj = notre source qui vient de l'exterieur, objet qui a été crée par utilisateur
    }

  }

}

// new Order({}) permet d'obtenur un nouvel objet; quand l'utilisateur clique sur "ajouter"

// Dans mon application quand je vais créer un objet du type Order, on obtiendra les valeurs par défaut
