import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/Cliente.service';
import { ClienteDto } from '../dto/Cliente.dto';
import { FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule, FormsModule, CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {
  clienteEditado: number | null = null;
  nome = '';
  email = '';
  cliente: ClienteDto[] = [];
  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.listarCliente();
  }

  validarCampo(): void {
    if (!this.nome.trim() || !this.email.trim()) {
      return;
    }
  }

  criarCliente(): void {
    const cliente: ClienteDto = {
      nome: this.nome,
      email: this.email,
    };

    this.clienteService.criarCliente(cliente).subscribe((clienteCriado) => {
      localStorage.setItem('clienteId', String(clienteCriado.id));
      this.nome = '';
      this.email = '';
      console.log('to mandando ');
      this.router.navigate(['/produto']);
    });
  }

  listarCliente(): void {
    this.clienteService.listarCliente().subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  atualizarCliente(cliente: ClienteDto): void {
    ((this.clienteEditado = cliente.id!), (this.nome = cliente.nome), (this.email = cliente.email));
  }

  salvarEdicao(): void {
    const cliente: ClienteDto = {
      id: this.clienteEditado!,
      nome: this.nome,
      email: this.email,
    };

    this.clienteService.atualizarCliente(cliente, cliente.id!).subscribe(() => {
      this.clienteEditado = null;
      this.nome = '';
      this.email = '';
      this.listarCliente();
    });
  }

  deletarCliente(id: number): void {
    this.clienteService.deletarCliente(id).subscribe(() => {
      this.listarCliente();
    });
  }
  irParaProdutos(): void {
    this.router.navigate(['/produtos']);
  }
}
