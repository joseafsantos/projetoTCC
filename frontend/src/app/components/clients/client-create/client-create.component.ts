import { ClientService } from './../../clients/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createClient(): void {
    this.clientService.showMessage('Registro Salvo')
  }
  
  cancel(): void {
    this.router.navigate(['/clients'])
}

}
  
