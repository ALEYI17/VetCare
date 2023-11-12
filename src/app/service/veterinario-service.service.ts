import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../Entities/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioServiceService {

  constructor(private http: HttpClient) { }

   // Método para desactivar un tratamiento
  findAll(): Observable<Veterinario[]>{
    return this.http.get<Veterinario[]>('http://localhost:8090/Veterinario/todos')
  }
// Método para eliminar un veterinario por su ID
  eliminarById(id:number){
    this.http.delete('http://localhost:8090/Veterinario/delete/'+ id).subscribe();
  }
// Método para obtener un veterinario por su ID
  findByid(id:number):Observable<Veterinario>{
    const veterinario = this.http.get<Veterinario>('http://localhost:8090/Veterinario/find/'+id);
    return veterinario;
  }
 // Método para actualizar la información de un veterinario
  updateVeterinario(veterinario:Veterinario):Observable<Object>{
    return this.http.put('http://localhost:8090/Veterinario/update/'+ veterinario.id,veterinario);
  }
 // Método para agregar un nuevo veterinario
  agregarVeterinario(veterinario:Veterinario):Observable<Object>{
    return this.http.post("http://localhost:8090/Veterinario/add",veterinario);
  }

 veterinarioHome():Observable<Veterinario>{
    const veterinario = this.http.get<Veterinario>('http://localhost:8090/Veterinario/details');
    return veterinario;
  }
}
