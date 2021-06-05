import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-permissoes',
  templateUrl: './permissoes.page.html',
  styleUrls: ['./permissoes.page.scss'],
})
export class PermissoesPage implements OnInit {

  usuarios:Usuario[];
  emptyList:String = "../../assets/note.png";


  constructor(
    private alertController: AlertController,
    private toastController:ToastController,
    private loginService:LoginService) {
    this.refreshUsuarios();
  }

  ngOnInit() {
    this.usuarios = [];
  }


  atualizarUsuario(usuario:Usuario){
    this.loginService.atualizar(usuario).subscribe(
     (value)=> {
       console.log(this.usuarios);
     },
     (error)=> console.error(error),
   );
 }

  refreshUsuarios(){
     this.loginService.getUsuarios().subscribe(
      (value)=> {
        this.usuarios = value;
        console.log(this.usuarios);
      },
      (error)=> console.error(error),
    );
    console.log(this.usuarios);
  }



  ionViewWillEnter(){
    this.refreshUsuarios();
  }

}
