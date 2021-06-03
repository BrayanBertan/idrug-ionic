export class Usuario {
  id:number;
  nome: String;
  usuario:String;
  senha:String;
  foto:String;
  permissoes:any;


  constructor(id:number,nome:String,usuario:string,senha:string,foto:String,permissoes:any) {
      this.id = id;
      this.nome = nome;
      this.usuario = usuario;
      this.senha = senha;
      this.permissoes = permissoes;
      this.foto = foto;
  }
}
