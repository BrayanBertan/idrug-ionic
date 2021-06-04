import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedidos } from './pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private url = 'http://localhost:3000/pedidos';

  constructor(
    private httpCliente:HttpClient,
  ) {
  }

   public  getPedidos(): Observable<Pedidos[]>{
    return this.httpCliente.get<Pedidos[]>(this.url);
  }




  atualizar(pedido: Pedidos) {
   return this.httpCliente.put(`${this.url}/${pedido.id}`,pedido);
  }

}
