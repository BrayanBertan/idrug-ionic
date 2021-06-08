import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../shared/login.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  usuarioID:number;
  cadastroForm: FormGroup;


  constructor(
    private toastController: ToastController,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {

    let usuario={
      id:null,
      nome: "",
      usuario:"",
      senha:"",
      foto:"https://www.pngjoy.com/pngm/136/2750635_gray-circle-login-user-icon-png-transparent-png.png",
      permissoes:null
    };
    this.initializaFormulario(usuario);

  }


  get nome() {
    return this.cadastroForm.get('nome');
  }
  get usuario() {
    return this.cadastroForm.get('usuario');
  }
  get senha() {
    return this.cadastroForm.get('senha');
  }
  get foto() {
    return this.cadastroForm.get('foto');
  }

  initializaFormulario(usuario:Usuario){
    this.cadastroForm = new FormGroup({

      nome: new FormControl(usuario.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      usuario: new FormControl(usuario.usuario, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ]),
      senha: new FormControl(usuario.senha, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ]),
      foto: new FormControl(usuario.foto, [
        Validators.required
      ]),
    })
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.usuarioID = id;
      this.loginService
        .getUsuario(id)
        .subscribe((usuario) => this.initializaFormulario(usuario)
        );
    }

  }


  salvar() {
    const usuario = {...this.cadastroForm.value,permissoes:{
      "farmacia":true,
      "produtos":true,
      "pedidos":true,
      "permissoes":false,


    }};
    this.loginService.salvar(usuario).subscribe(
      value => {
        this.toastController.create({
          message: `usuario ${usuario.nome} criado com sucesso`,
          duration: 5000,
          keyboardClose: true,
          color: 'success'
        }).then(t => t.present());
        this.router.navigate(['']);
      },
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `erro Não foi possível salvar o usuario ${usuario.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }


}
