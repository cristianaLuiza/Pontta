import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoDto } from '../dto/Produto.dto';
import { ProdutoService } from '../services/Produto.service';
import { CommonModule } from '@angular/common';

import { Pedidos } from '../pedidos/pedidos';

@Component({
  selector: 'app-produtos',
  imports: [FormsModule, CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  listarProdutos(): void {}

  salvarProduto(): void {}

  editarProduto(produto: ProdutoDto): void {}

  excluirProduto(): void {}
}
