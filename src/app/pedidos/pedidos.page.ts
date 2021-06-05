import { Pedidos } from './../shared/pedidos';
import { ProdutoService } from './../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Item } from '../shared/item';
import { PedidosService } from '../shared/pedidos.service';
import { ItensPedidoComponent } from './itens-pedido/itens-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos:Pedidos[];
  emptyList:String = "../../assets/note.png";
  status = [
    "Pendente",
    "Preparação",
    "Enviado",
    "Entregue"
  ];

  constructor(
    private alertController: AlertController,
    private toastController:ToastController,
    private pedidoService:PedidosService,
    private modalController:ModalController,
    private produtoService:ProdutoService) {
    this.refreshPedidos();
  }

  ngOnInit() {
    this.pedidos = [];
  }


  async itensModal(itens:Item[]) {
    const modal = await this.modalController.create({
      component: ItensPedidoComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'itens': itens
      }
    });
    return await modal.present();
  }




  refreshPedidos(){
     this.pedidoService.getPedidos().subscribe(
      (value)=> {
        this.pedidos = value;
        this.pedidos.forEach(pedido => {
          pedido.total = 0;
          pedido.itens.forEach(item => {
            pedido.total += item.preco_unitario * item.quantidade
            if(item.foto == null){
              this.produtoService.getProduto(item.produto).subscribe(
                (value)=> {
                  item.foto = value.foto;
                  item.nome = value.nome;
                },
                (error)=>console.error(error),
              );
            }
          }
          );
       });
        console.log(this.pedidos);
      },
      (error)=> console.error(error),
    );
    console.log(this.pedidos);
  }

  changeStatus(pedido:Pedidos,status:number){
    pedido.status = status;
    this.pedidoService.atualizar(pedido).subscribe(
      value => {
        this.toastController.create({
          message: `O status do pedido ${pedido.id} foi atualizado com sucesso para ${this.status[pedido.status]}`,
          duration: 1500,
          keyboardClose: true,
          color: 'success'
        }).then(t => t.present());
      },
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o novo status do pedido ${pedido.id}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );
    this.refreshPedidos();
  }

  ionViewWillEnter(){
    this.refreshPedidos();
  }
}
