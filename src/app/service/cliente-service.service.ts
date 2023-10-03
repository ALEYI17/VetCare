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

  eliminarMascota(id:number){

    this.http.get('http://localhost:8090/Clientes/delete/'+id).subscribe();

  }

  agregarMascota(cliente:Cliente){
    this.http.post('http://localhost:8090/Clientes/add',cliente).subscribe();
  }

  updateCliente(){

  }
  
  getByCedula(){

  }

  removerClienteByCedula(){
    
  }
}
