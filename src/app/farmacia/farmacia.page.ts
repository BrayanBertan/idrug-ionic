import { FarmaciaService } from './../shared/farmacia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Farmacia } from './../shared/Farmacia';
import { ModoPagamento } from '../shared/modo-pagamento';
import { Router } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.page.html',
  styleUrls: ['./farmacia.page.scss'],
})
export class FarmaciaPage implements OnInit {

  farmaciaId: number;
  farmaciasForm: FormGroup;

  modos_pagamento = [
    new ModoPagamento('Cartão de credito',true,'../../assets/credit-card.png'),
    new ModoPagamento('Cartão de debito',false,'../../assets/debit-card.png' ),
    new ModoPagamento('Boleto',true,'../../assets/barcode.png'),
    new ModoPagamento('Pix',false,'../../assets/pix.png')
  ];
  constructor(
    private toastController: ToastController,
    private farmaciaService: FarmaciaService,
    private router:Router
  ) {

    let farmacia={
      nome: "",
      sobre:"",
      endereco:"",
      telefone:"",
      celular:"",
      email:"",
      logo:"https://img2.gratispng.com/20180331/yzq/kisspng-pharmacy-logo-pharmacist-pharmaceutical-drug-pharmacy-5abf3058c52fd8.1225652515224791928077.jpg",
      cnpj:"",
      credito:true,
      debito:false,
      boleto:true,
      pix:true
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
        .subscribe((farmacia) => {
        
          this.initializaFormulario(farmacia[0]);
          this.modos_pagamento[0].isChecked = farmacia[0].credito; 
          this.modos_pagamento[1].isChecked = farmacia[0].debito; 
          this.modos_pagamento[2].isChecked = farmacia[0].boleto; 
          this.modos_pagamento[3].isChecked = farmacia[0].pix; 
          //this.modos_pagamento = farmacia[0].aceitos
        }
        );


  }


  salvar() {
   // this.modos_pagamento.forEach(item => console.log(item.isChecked,'checked'));
  
    const farmacia = {...this.farmaciasForm.value,
      credito:this.modos_pagamento[0].isChecked,
      debito:this.modos_pagamento[1].isChecked,
      boleto:this.modos_pagamento[2].isChecked,
      pix:this.modos_pagamento[3].isChecked
    };
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


