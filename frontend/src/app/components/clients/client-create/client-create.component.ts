import { Client } from './../client.model';
import { ClientService } from './../../clients/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client  = {
    pedido: 0,
    dataVcto: 0,
    responsavel: '',
    email: '',
    contato: 0,
    produto: '',
    cpf: 0,
    cnpj: 0,
    razao: '',
    id: 0
  }

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Registro Salvo')
      this.router.navigate(['/clients'])
    })
    }
  
  cancel(): void {
    this.router.navigate(['/clients'])
}

}
  
