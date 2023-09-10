import { Client } from './client.model';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseURL = "http://localhost:3001/clientes"

  constructor(private snackMar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackMar.open(msg, 'fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    }

    create(client: Client): Observable<Client> {
      return this.http.post<Client>(this.baseURL, client)
    }
  
}
