import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../shared/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;


  constructor(
    private toastController: ToastController,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    let usuario={
      usuario:"",
      senha:""
    };
    this.initializaFormulario(usuario);

  }



  get usuario() {
    return this.loginForm.get('usuario');
  }
  get senha() {
    return this.loginForm.get('senha');
  }

  initializaFormulario(usuario:any){
    this.loginForm = new FormGroup({

      usuario: new FormControl(usuario.usuario, [
        Validators.required
      ]),
      senha: new FormControl(usuario.senha, [
        Validators.required
      ])
    })
  }

  ngOnInit() {

  }


  login() {
    const usuario = this.loginForm.value;
    this.loginService.loginUsuario(usuario.usuario,usuario.senha).subscribe(
      value => {
        if(value['length'] == 0){
          this.toastController.create({
            message: `Dados incorretos`,
            duration: 1500,
            keyboardClose: true,
            color: 'danger'
          }).then(t => t.present());
        }
        else{
          this.loginService.setUsuario(value);
          this.router.navigate(['']);
        }
      },
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `Erro`,
          duration: 1500,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }


}
