import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicamento } from '../Entities/medicamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoServiceService {

  constructor(private http: HttpClient) { }

  findAll():Observable<Medicamento[]>{
    return this.http.get<Medicamento[]>("http://localhost:8090/Medicamentos/todos");
  }
}
