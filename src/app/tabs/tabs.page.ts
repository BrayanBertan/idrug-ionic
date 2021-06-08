import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  implements OnInit {

  usuario:Usuario;
  constructor(private loginService:LoginService,private router:Router) {

  }

  ngOnInit() {
    this. checkUsuario();
  }

  logOut(){
    this.loginService.setUsuario(null);
    this.router.navigate(['login']);
  }

  ionViewWillEnter(){
    this. checkUsuario();
  }

  checkUsuario(){
    if(this.loginService.isAuth())
    this.usuario = this.loginService.usuario;
  else
    this.router.navigate(['login']);
  console.log(this.usuario,'usuario');
  }

}
