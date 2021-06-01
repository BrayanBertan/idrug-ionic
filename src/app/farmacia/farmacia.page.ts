import { FarmaciaService } from './../shared/farmacia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Farmacia } from './../shared/Farmacia';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
})
export class FarmaciaPage implements OnInit {

  farmaciaId: number;
  farmaciasForm: FormGroup;
  constructor(
    private toastController: ToastController,
    private farmaciaService: FarmaciaService,
  ) {

    let farmacia={
      nome: "",
      sobre:"",
      endereco:"",
      telefone:"",
      celular:"",
      email:"",
      logo:"https://img2.gratispng.com/20180331/yzq/kisspng-pharmacy-logo-pharmacist-pharmaceutical-drug-pharmacy-5abf3058c52fd8.1225652515224791928077.jpg",
      cnpj:""
    };
    this.initializaFormulario(farmacia);

  }


  get nome() {
    return this.farmaciasForm.get('nome');
  }
  get sobre() {
    return this.farmaciasForm.get('sobre');
  }
  get endereco() {
    return this.farmaciasForm.get('endereco');
  }
  get telefone() {
    return this.farmaciasForm.get('telefone');
  }
  get celular() {
    return this.farmaciasForm.get('celular');
  }
  get email() {
    return this.farmaciasForm.get('email');
  }
  get logo() {
    return this.farmaciasForm.get('logo');
  }
  get cnpj() {
    return this.farmaciasForm.get('cnpj');
  }

  initializaFormulario(farmacia:Farmacia){
    this.farmaciasForm = new FormGroup({

      nome: new FormControl(farmacia.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),

      sobre: new FormControl(farmacia.sobre, [
        Validators.required
      ]),

      endereco: new FormControl(farmacia.endereco, [
        Validators.required
      ]),

      telefone: new FormControl(farmacia.telefone, [
        Validators.required
      ]),

      celular: new FormControl(farmacia.celular, [
        Validators.required
      ]),

      email: new FormControl(farmacia.email, [
        Validators.required
      ]),
      logo: new FormControl(farmacia.logo, [
        Validators.required
      ]),
      cnpj: new FormControl(farmacia.cnpj, [
        Validators.required
      ])
    })
  }

  ngOnInit() {
      this.farmaciaService
        .getFarmacia()
        .subscribe((farmacia) => this.initializaFormulario(farmacia[0])
        );


  }


  salvar() {
    const farmacia = this.farmaciasForm.value
    this.farmaciaService.atualizar(farmacia).subscribe(
      value => {
        this.toastController.create({
          message: `Farmacia ${farmacia.nome} atualizada com sucesso`,
          duration: 5000,
          keyboardClose: true,
          color: 'success'
        }).then(t => t.present());
      },
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `erro Não foi possível salvar o farmacia ${farmacia.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }



}
