import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../Entities/veterinario';
import { Cliente } from '../Entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }


  authvet(veterinario:Veterinario): Observable<boolean>{

    return this.http.post<boolean>('http://localhost:8090/Veterinariologin',veterinario)

  }

  authcliente(cliente:Cliente): Observable<string>{

    return this.http.post<string>('http://localhost:8090/clientelogin',cliente)

  }


}
