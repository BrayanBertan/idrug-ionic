import { Usuario } from "./usuario";

export class Logs {

  id:number;
  acao: String;
  usuario:Usuario;


  constructor(id:number,acao:String,usuario:Usuario) {
      this.id = id;
      this.acao = acao;
      this.usuario = usuario;
  }
}
