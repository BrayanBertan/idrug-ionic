import { Farmacia } from './farmacia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  private url = 'http://localhost:8080/idrug-api-1.0.0/api/farmacias';
  constructor(
    private httpCliente:HttpClient
  ) {

  }

  public getFarmacia():  Observable<Farmacia>{
      return  this.httpCliente.get<Farmacia>(this.url);
  }

  atualizar(Farmacia: Farmacia) {
  return this.httpCliente.put(`${this.url}/1`,Farmacia);

  }

}
