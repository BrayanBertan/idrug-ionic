import { Farmacia } from './farmacia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  private url = 'http://localhost:3000/farmacia';
  constructor(
    private httpCliente:HttpClient
  ) {

  }

  public getFarmacia():  Observable<Farmacia>{
      return  this.httpCliente.get<Farmacia>(this.url);
  }

  atualizar(Farmacia: Farmacia) {
  return this.httpCliente.put(this.url,Farmacia);

  }

}
