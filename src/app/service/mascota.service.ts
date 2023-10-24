import { Injectable } from '@angular/core';
import { Mascota } from '../Entities/mascota';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Entities/cliente';
import { Tratamiento } from '../Entities/tratamiento';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }


// Método para obtener todas las mascotas
  findAll(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8090/Mascota/todas')
  }
// Método para obtener una mascota por su ID
  findById(id: number): Observable<Mascota> {
    const mascota = this.http.get<Mascota>('http://localhost:8090/Mascota/find/'+id);
    return mascota;
  }
 // Método para obtener el ID del dueño de una mascota por su ID
  findDueno(id:number): Observable<number>{
    const CedulaDueno = this.http.get<number>('http://localhost:8090/Mascota/find/'+id+ "/dueno");
    return CedulaDueno;
  }
 // Método para obtener información completa del dueño de una mascota por su ID
  findDuenoCompleto(id:number):Observable<Cliente>{
    const dueno = this.http.get<Cliente>('http://localhost:8090/Mascota/find/'+id+ "/duenocompleto");
    return dueno;
  }
  // Método para eliminar una mascota por su ID
  eliminarMascota(id:number){

    this.http.delete('http://localhost:8090/Mascota/delete/'+id).subscribe();

  }
  // Método para agregar una nueva mascota
  agregarMascota(mascota:Mascota, clientId: string):Observable<Object>{
    console.log(mascota);
    
    return this.http.post("http://localhost:8090/Mascota/agregar?clientId="+clientId,mascota);
    
  }
  // Método para actualizar la información de una mascota
  updateMascota(mascota:Mascota, clientId?: string):Observable<Object>{
    console.log(mascota)
    
    return this.http.put("http://localhost:8090/Mascota/update/"+ mascota.id+ "?cliente.id="+clientId, mascota);
  }
 // Método para obtener los tratamientos de una mascota por su ID
  findTratamientos(id:number):Observable<Tratamiento[]>{
    const tratamientos = this.http.get<Tratamiento[]>('http://localhost:8090/Mascota/find/'+id+ "/tratamientos");
    return tratamientos;
  }

  cambiarEstado(id: number, estado: Boolean): Observable<Boolean> {
    return this.http.put<Boolean>("http://localhost:8090/Mascota/cambiarestado/" + id, estado);
  }
}
