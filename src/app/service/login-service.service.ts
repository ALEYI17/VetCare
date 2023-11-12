import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../Entities/veterinario';
import { Cliente } from '../Entities/cliente';
import { admin } from '../Entities/admin';
import { User } from '../Entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

// Método para autenticar a un veterinario
  authvet(use:User): Observable<String>{

    return this.http.post('http://localhost:8090/Veterinariologin',use,{
      responseType: 'text'
    });

  }
 // Método para autenticar a un cliente
  authcliente(use:User): Observable<String>{

    return this.http.post('http://localhost:8090/clientelogin',use,{
      responseType: 'text'
    });

  }
// Método para autenticar a un administrador
  authAdmin(admin:admin):Observable<boolean>{
    return this.http.post<boolean>('http://localhost:8090/AdminLogin',admin);
  }
}
