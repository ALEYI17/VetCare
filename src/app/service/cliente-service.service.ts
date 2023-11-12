import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) { }

   // Método para obtener todos los clientes
  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8090/Clientes/todos')
  }

  // Método para obtener un cliente por su ID
  findById(id: number): Observable<Cliente> {
    const mascota = this.http.get<Cliente>('http://localhost:8090/Clientes/find/'+id);
    return mascota;
  }

  // Método para eliminar un cliente por su ID
  eliminarCliente(id:string){

    this.http.delete('http://localhost:8090/Clientes/delete/'+id).subscribe();

  }

  // Método para agregar un nuevo cliente
  agregarCliente(cliente:Cliente):Observable<Object>{
    return this.http.post('http://localhost:8090/Clientes/add',cliente);
  }

   // Método para actualizar la información de un cliente
  updateCliente(cliente:Cliente):Observable<Object>{
    return this.http.put('http://localhost:8090/Clientes/update/'+ cliente.cedula, cliente);
  }
  // Método para obtener un cliente por su cédula (pendiente de implementación)
  getByCedula(){

  }
// Método para eliminar un cliente por su cédula
  removerClienteByCedula(id:string){
    this.http.delete('http://localhost:8090/Clientes/delete/' + id).subscribe();
  }

  clienteHome():Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/Clientes/details');
  }
  
}
