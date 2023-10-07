import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8090/Clientes/todos')
  }

  findById(id: number): Observable<Cliente> {
    const mascota = this.http.get<Cliente>('http://localhost:8090/Clientes/find/'+id);
    return mascota;
  }

  eliminarCliente(id:string){

    this.http.delete('http://localhost:8090/Clientes/delete/'+id).subscribe();

  }

  agregarCliente(cliente:Cliente):Observable<Object>{
    return this.http.post('http://localhost:8090/Clientes/add',cliente);
  }

  updateCliente(cliente:Cliente):Observable<Object>{
    return this.http.post('http://localhost:8090/Clientes/update/'+ cliente.cedula, cliente);
  }
  
  getByCedula(){

  }

  removerClienteByCedula(id:string){
    this.http.delete('http://localhost:8090/Clientes/delete/' + id).subscribe();
  }
}
