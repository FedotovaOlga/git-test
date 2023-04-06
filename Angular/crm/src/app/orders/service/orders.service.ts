import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

// Acces à toutes les propriétés et méthodes de httpClient
// this.http.get('url')
// this.http.delete('url')

  constructor(private http: HttpClient) {
    console.log('depuis service orders');
   }

  //  créer une nouvelle méthode
  public sumUp (a:number, b:number): number{ // "public" c'est par défaut
    return a+b
  }

  // appel http
  public getDatas(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');

  }
}
