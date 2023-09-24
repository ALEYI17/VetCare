import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
@Component({
  selector: 'app-mascota-crud',
  templateUrl: './mascota-crud.component.html',
  styleUrls: ['./mascota-crud.component.css']
})
export class MascotaCrudComponent {
    selectedMascota!: Mascota;
    
    listaDeMascotas!: Mascota[] ;

    constructor(private mascotaServicio: MascotaService){
        
    }

    ngOnInit():void{
        this.listaDeMascotas = this.mascotaServicio.findAll();
    }

mostrarEstudiante(mascota: Mascota){
    this.selectedMascota = mascota;
  }
}
