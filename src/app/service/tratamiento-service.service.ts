import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tratamiento } from '../Entities/tratamiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoServiceService {

  constructor(private http: HttpClient) { }

  crearTratamiento(medicamentoId:number,MascotaId:number,VeterinarioId:number,tratamiento:Tratamiento):Observable<Object>{
    return this.http.post("http://localhost:8090/Tratamiento/add?MascotaId=" + MascotaId +"&VeterinarioId=  "+ VeterinarioId + "&MedicamentoId="+ medicamentoId,tratamiento)
  }

  desactivar(tratamiento:Tratamiento):Observable<Tratamiento>{
    return this.http.post<Tratamiento>('http://localhost:8090/Tratamiento/Desactivar',tratamiento);
  }
}
