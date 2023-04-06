import { StateOrder } from "../enums/state-order";

export interface OrderI {
  // objectif: lister toutes les propriétés de l'objet Order
  // et on va fixer des types pour chacune des propriétés
  tjmHt : number;
  nbJours : number;
  tva : number;
  state : StateOrder;
  typePresta : string;
  client : string;
  comment : string;
  id : number;
}

// créer un modèle qui respecte les règles fixées dans l'enum + interface
