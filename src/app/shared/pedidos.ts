import { Item } from "./item";

export class Pedidos {
  id: number;
  usuario:String;
  modo_pagamento:String;
  endereco:String;
  status:number;
  itens:Item[];
  total:number=null;


  constructor(id: number,usuario:String,modo_pagamento:String,endereco:String, status:number,itens:Item[]) {
      this.id = id;
      this.usuario = usuario;
      this.modo_pagamento = modo_pagamento;
      this.endereco = endereco;
      this.status = status;
      this.itens = itens;
  }
}
