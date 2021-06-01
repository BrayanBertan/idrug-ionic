import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produtos:Produto[];

  constructor(
    private alertController: AlertController,
    private toastController:ToastController,
    private produtoService:ProdutoService) {
    this.refreshProdutos();
  }

  ngOnInit() {
  }

  async removeConfirm(produto:Produto){
    await this.alertController.create({
      header:'Confirmação de exclusão',
      message:`Deseja excluir o produto ${produto.nome}`,
      buttons:[{
        text:'Sim',
        cssClass:'ion-color-success',
        handler:() => {
          this.remove(produto);
        }
      },{
        text:'Não',
        cssClass:'ion-color-danger',
      }]
    }).then(alert => alert.present());
  }


  remove(produto:Produto) {
    this.produtoService.removeLivro(Produto).subscribe(
      (value)=> this.refreshLivros(),
      (error)=> {
        this.toastController.create({
          message: 'Não foi possivel excluir o produto',
          duration: 5000,
          keyboardClose: true,
          color:'danger'
        }).then(
          t => t.present()
        )}
    );
  }
  refreshProdutos(){
     this.produtoService.getLivros().subscribe(
      (value)=> {
        this.produtos = value;
        console.log(this.produtos);
      },
      (error)=> console.error(error),
    );
    console.log(this.produtos);
  }

  ionViewWillEnter(){
    this.refreshProdutos();
  }

}
