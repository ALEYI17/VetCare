import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
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

  getVeterinariosData(): Observable<{ activos: number, inactivos: number }> {
    const activos$ = this.http.get<number>('http://localhost:8090/estadisticas/vetactivos');
    const inactivos$ = this.http.get<number>('http://localhost:8090/estadisticas/vetinactivos');

    // Using forkJoin to combine multiple observables
    return forkJoin({ activos: activos$, inactivos: inactivos$ });
  }

  getMascotasTotales():Observable<object>{
    return this.http.get('http://localhost:8090/estadisticas/countmascotas')
  }

  getTratamientosUltimoMes():Observable<object>{
    return this.http.get('http://localhost:8090/estadisticas/tratamientosmes')
  }

  getCantidadTratamientosPorTipoEnUltimoMes():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/tratamientomedicamento')
  }

  getGananciasTotales():Observable<object>{
    return this.http.get('http://localhost:8090/estadisticas/gananciastotales')
  }

  getVentasTotales():Observable<object>{
    return this.http.get('http://localhost:8090/estadisticas/totalventas')
  }

  getTratemientosActivos():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/TratamientosActivos')
  }

  getTop3Medicamneto():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>('http://localhost:8090/estadisticas/topmedicamentos')
  }
}
