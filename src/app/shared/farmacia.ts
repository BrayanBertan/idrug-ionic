export class Farmacia {


  nome: String;
  sobre:String;
  endereco:String;
  telefone:String;
  celular:String;
  email:String;
  logo:String;
  cnpj:String;


  constructor(nome:String,sobre:String,endereco:String,telefone:String,celular:String,email:String,logo:String,cnpj:String) {
      this.sobre = sobre;
      this.endereco = endereco;
      this.telefone = telefone;
      this.celular = celular;
      this.email = email;
      this.logo = logo;
      this.cnpj = cnpj;
  }
}
