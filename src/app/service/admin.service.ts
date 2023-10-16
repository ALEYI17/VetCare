import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../Entities/medicamento';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getVeterinariosActivos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/vetactivos')
  }

  getVeterinariosIncativos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/vetinactivos')
  }

  getMascotasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/countmascotas')
  }

  getTratamientosUltimoMes():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/tratamientosmes')
  }

  getCantidadTratamientosPorTipoEnUltimoMes():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/tratamientomedicamento')
  }

  getGananciasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/gananciastotales')
  }

  getVentasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/totalventas')
  }

  getTratemientosActivos():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/TratamientosActivos')
  }

  getTop3Medicamneto():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>('http://localhost:8090/estadisticas/topmedicamentos')
  }
}
