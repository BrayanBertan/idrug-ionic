export class Produto {

  id:number;
  nome: String;
  descricao:String;
  categoria:String;
  preco:number;
  volume:String;
  unidade:String;
  estoque:number;
  foto:String;



  constructor(id:number,nome:String,descricao:String,categoria:String,preco:number,volume:String,unidade:String,estoque:number,foto:String) {
      this.id = id;
      this.nome = nome;
      this.descricao = descricao;
      this.categoria = categoria;
      this.preco = preco;
      this.volume = volume;
      this.unidade = unidade;
      this.estoque = estoque;
      this.foto = foto;
  }
}
