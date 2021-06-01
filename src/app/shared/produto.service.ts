import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:3000/produtos';
  constructor(
    private httpCliente:HttpClient
  ) {

  }

   public  getProdutos(): Observable<Produto[]>{
    return this.httpCliente.get<Produto[]>(this.url);
  }

  public removeProduto(produto:Produto){
    return this.httpCliente.delete(`${this.url}/${produto.id}`);
  }

  public getProduto(id:number):  Observable<Produto>{
      return  this.httpCliente.get<Produto>(`${this.url}/${id}`);
  }


  adicionar(produto: Produto) {
     return this.httpCliente.post(`${this.url}`,produto);

  }

  atualizar(produto: Produto) {
  return this.httpCliente.put(`${this.url}/${produto.id}`,produto);

  }

  salvar(produto: Produto){
    if(produto.id)
      return this.atualizar(produto);
    else
    return this.adicionar(produto);
  }
}
