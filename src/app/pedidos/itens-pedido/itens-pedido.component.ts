import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item';

@Component({
  selector: 'app-itens-pedido',
  templateUrl: './itens-pedido.component.html',
  styleUrls: ['./itens-pedido.component.scss'],
})
export class ItensPedidoComponent implements OnInit {
  @Input() itens: Item[];

  constructor() { }

  ngOnInit() {
  }

}
