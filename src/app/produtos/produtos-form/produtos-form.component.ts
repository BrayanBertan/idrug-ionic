import { ProdutoService } from './../../shared/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Produto } from './../../shared/Produto';
@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss'],
})
export class ProdutosFormComponent implements OnInit {

  produtoId: number;
  produtosForm: FormGroup;
  unidades = [
    'Comprimido',
    'Mg',
    'G',
    'Ml',
    'Gotas',
  ];

  categorias = [
    'Relaxante Muscular',
    'Anticoagulante',
    'anti-hipertensivo',
    'Analgésico',
    'Antidiabético',
    'Suplemento de vitamina',
    'Anti-inflamatório',
    'Ansiolitíco',
    'Anticonvulsionante'
  ]
  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
  ) {

    let produto={
      id:null,
      nome: "",
      descricao:"",
      categoria:"Relaxante Muscular",
      preco:0,
      volume:"0",
      unidade:"Comprimido",
      estoque:0,
      foto:'../../assets/produtos.png'
    };
    this.initializaFormulario(produto);

  }


  get nome() {
    return this.produtosForm.get('nome');
  }
  get descricao() {
    return this.produtosForm.get('descricao');
  }
  get categoria() {
    return this.produtosForm.get('categoria');
  }
  get preco() {
    return this.produtosForm.get('preco');
  }
  get volume() {
    return this.produtosForm.get('volume');
  }
  get unidade() {
    return this.produtosForm.get('unidade');
  }
  get estoque() {
    return this.produtosForm.get('estoque');
  }
  get foto() {
    return this.produtosForm.get('foto');
  }

  initializaFormulario(produto:Produto){
    this.produtosForm = new FormGroup({

      nome: new FormControl(produto.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),

      descricao: new FormControl(produto.descricao, [
        Validators.required
      ]),

      categoria: new FormControl(produto.categoria, [
        Validators.required
      ]),

      preco: new FormControl(produto.preco, [
        Validators.required
      ]),

      volume: new FormControl(produto.volume, [
        Validators.required
      ]),

      unidade: new FormControl(produto.unidade, [
        Validators.required
      ]),
      estoque: new FormControl(produto.estoque, [
        Validators.required
      ]),
      foto: new FormControl(produto.foto, [
        Validators.required
      ])
    })
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.produtoId = id;
      this.produtoService
        .getProduto(id)
        .subscribe((produto) => this.initializaFormulario(produto)
        );
    }

  }


  salvar() {
    const produto = {...this.produtosForm.value, id: this.produtoId}
    this.produtoService.salvar(produto).subscribe(
      value => this.router.navigate(['tabs/produtos']),
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o produto ${produto.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }
}
