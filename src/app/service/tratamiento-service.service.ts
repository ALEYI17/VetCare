import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tratamiento } from '../Entities/tratamiento';
import { Observable } from 'rxjs';
import { Medicamento } from '../Entities/medicamento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoServiceService {

  constructor(private http: HttpClient) { }

   // Método para crear un tratamiento
  crearTratamiento(medicamentoId:number,MascotaId:number,VeterinarioId:number,tratamiento:Tratamiento):Observable<Object>{
    return this.http.post("http://localhost:8090/Tratamiento/add?MascotaId=" + MascotaId +"&VeterinarioId=  "+ VeterinarioId + "&MedicamentoId="+ medicamentoId,tratamiento)
  }

  getMedicamentosDelTratamiento(id:number):Observable<Medicamento>{
    return this.http.get<Medicamento>('http://localhost:8090/Tratamiento/'+ id +'/medicamento');

  }
}
