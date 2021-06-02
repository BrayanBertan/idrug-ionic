export class ModoPagamento {



  val: String;
  isChecked:boolean;
  logo:String;


  constructor(val:String,isChecked:boolean,logo:String) {
      this.val = val;
      this.isChecked = isChecked;
      this.logo = logo;
  }
}
