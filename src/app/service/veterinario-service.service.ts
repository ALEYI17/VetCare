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
}
