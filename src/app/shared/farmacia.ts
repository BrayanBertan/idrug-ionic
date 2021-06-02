import { ModoPagamento } from "./modo-pagamento";

export class Farmacia {


  nome: String;
  sobre:String;
  endereco:String;
  telefone:String;
  celular:String;
  email:String;
  logo:String;
  cnpj:String;
  aceitos:ModoPagamento[];


  constructor(nome:String,sobre:String,endereco:String,telefone:String,celular:String,email:String,logo:String,cnpj:String,aceitos:ModoPagamento[]) {
    this.nome = nome;
      this.sobre = sobre;
      this.endereco = endereco;
      this.telefone = telefone;
      this.celular = celular;
      this.email = email;
      this.logo = logo;
      this.cnpj = cnpj;
      this.aceitos = aceitos;
  }
}
