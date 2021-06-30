import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _storage: Storage | null = null;
  private url =  'http://localhost:8080/idrug-api-1.0.0/api/usuarios';
  usuario:Usuario;
  constructor(
    private httpCliente:HttpClient,
    private router: Router
  ) {
    this.usuario = null;
  }

   public  getUsuarios(): Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>(this.url);
  }

  public removeUsuario(usuario:Usuario){
    return this.httpCliente.delete(`${this.url}/${usuario.id}`);
  }

  public getUsuario(id:number):  Observable<Usuario>{
      return  this.httpCliente.get<Usuario>(`${this.url}/${id}}`);
  }

  public isAuth():boolean{
    if(this.usuario == null)
      return  false;
    return  true;
}


  public loginUsuario(usuario:String,senha:String):  Observable<Usuario>{
    console.log(usuario);
    console.log(senha);
    console.log(`${this.url}?usuario=${usuario}&senha=${senha}`);
    return  this.httpCliente.get<Usuario>(`${this.url}?usuario=${usuario}&senha=${senha}`);
}

  public setUsuario(usuario:Usuario){
    this.usuario = usuario;
    this.usuario.permissoes = {
      "farmacia":true,
      "produtos":true,
      "pedidos":true,
      "permissoes":true
    };
}


  adicionar(usuario: Usuario) {
     return this.httpCliente.post(`${this.url}`,usuario);

  }

  atualizar(usuario: Usuario) {
    this.usuario = usuario;
    return this.httpCliente.put(`${this.url}/${usuario.id}`,usuario);
  }

  salvar(usuario: Usuario){
    console.log(usuario);
    if(usuario.id)
      return this.atualizar(usuario);
    else
    return this.adicionar(usuario);
  }
}
