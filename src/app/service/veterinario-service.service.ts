import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../Entities/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veterinario[]>{
    return this.http.get<Veterinario[]>('http://localhost:8090/Veterinario/todos')
  }

  eliminarById(id:number){
    this.http.delete('http://localhost:8090/Veterinario/delete/'+ id).subscribe();
  }

  findByid(id:number):Observable<Veterinario>{
    const veterinario = this.http.get<Veterinario>('http://localhost:8090/Veterinario/find/'+id);
    return veterinario;
  }

  updateVeterinario(veterinario:Veterinario):Observable<Object>{
    return this.http.post('http://localhost:8090/Veterinario/update/'+ veterinario.id,veterinario);
  }

  agregarVeterinario(veterinario:Veterinario):Observable<Object>{
    return this.http.post("http://localhost:8090/Veterinario/add",veterinario);
  }
}
