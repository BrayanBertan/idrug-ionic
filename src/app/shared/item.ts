export class Item {
  id: number;
  pedido:number;
  produto:number;
  quantidade:number;
  preco_unitario:number;
  foto:String=null;
  nome:String=null;


  constructor(id: number,pedido:number,produto:number,quantidade:number, preco_unitario:number) {
      this.id = id;
      this.pedido = pedido;
      this.produto = produto;
      this.quantidade = quantidade;
      this.preco_unitario = preco_unitario;
  }
}
