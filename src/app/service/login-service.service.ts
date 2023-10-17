import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../Entities/veterinario';
import { Cliente } from '../Entities/cliente';
import { admin } from '../Entities/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

// Método para autenticar a un veterinario
  authvet(veterinario:Veterinario): Observable<boolean>{

    return this.http.post<boolean>('http://localhost:8090/Veterinariologin',veterinario)

  }
 // Método para autenticar a un cliente
  authcliente(cliente:Cliente): Observable<Cliente>{

    return this.http.post<Cliente>('http://localhost:8090/clientelogin',cliente)

  }
// Método para autenticar a un administrador
  authAdmin(admin:admin):Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8090/AdminLogin',admin);
  }
}
