export class Farmacia {

  id:number;
  nome: String;
  sobre:String;
  endereco:String;
  telefone:String;
  celular:String;
  email:String;
  logo:String;
  cnpj:String;


  constructor(id:number,nome:String,sobre:String,endereco:String,telefone:String,celular:String,email:String,logo:String,cnpj:String) {
      this.id = id;
      this.sobre = sobre;
      this.endereco = endereco;
      this.telefone = telefone;
      this.celular = celular;
      this.email = email;
      this.logo = logo;
      this.cnpj = cnpj;
  }
}
