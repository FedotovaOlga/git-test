import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  //injecter HttpClient
  // variable = propriété (http par ex.)
  // function = méthode

  constructor(private http: HttpClient) {
    console.log('depuis service clients');
   }
  public sumUp (a: number, b: number):number{
    return a+b
   }

  //  appel http
  public getDatas(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clients');
   }

  //  appel http vers l'url http://localhost:3000/clients
  // avant d'écrire on teste l'url dans le navigateur

}
