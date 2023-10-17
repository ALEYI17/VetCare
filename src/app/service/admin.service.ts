import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Medicamento } from '../Entities/medicamento';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // Obtiene la cantidad de veterinarios activos
  getVeterinariosActivos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/vetactivos')
  }

  // Obtiene la cantidad de veterinarios inactivos
  getVeterinariosIncativos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/vetinactivos')
  }

// Obtiene la cantidad total de mascotas
  getMascotasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/countmascotas')
  }

  // Obtiene datos relacionados con la cantidad de veterinarios activos e inactivos
  getVeterinariosData(): Observable<{ activos: number, inactivos: number }> {
    const activos$ = this.http.get<number>('http://localhost:8090/estadisticas/vetactivos');
    const inactivos$ = this.http.get<number>('http://localhost:8090/estadisticas/vetinactivos');

    // Using forkJoin to combine multiple observables
    return forkJoin({ activos: activos$, inactivos: inactivos$ });
  }
  // Obtiene la cantidad de tratamientos realizados en el último mes
  getTratamientosUltimoMes():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/tratamientosmes')
  }
// Obtiene la cantidad de tratamientos por tipo realizados en el último mes
  getCantidadTratamientosPorTipoEnUltimoMes():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/tratamientomedicamento')
  }
// Obtiene las ganancias totales
  getGananciasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/gananciastotales')
  }

  // Obtiene las ventas totales
  getVentasTotales():Observable<number>{
    return this.http.get<number>('http://localhost:8090/estadisticas/totalventas')
  }
// Obtiene los tratamientos activos
  getTratemientosActivos():Observable<object[]>{
    return this.http.get<object[]>('http://localhost:8090/estadisticas/TratamientosActivos')
  }
// Obtiene el top 3 de medicamentos
  getTop3Medicamneto():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>('http://localhost:8090/estadisticas/topmedicamentos')
  }
}
