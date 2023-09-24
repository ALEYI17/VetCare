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

    mostrarEstudiante(mascota: Mascota){
      this.selectedMascota = mascota;
    }
    
    onMascotaAdded(newMascota: Mascota) {
      // Push the new pet to the array
      this.listaDeMascotas.push(newMascota);
      console.log('Mascota added to listaDeMascotas:', newMascota);
    }

    eliminarMascota(mascota:Mascota){
      var index = this.listaDeMascotas.indexOf(mascota)
      this.listaDeMascotas.splice(index,1)
    }
    

    ngOnInit():void{
        this.listaDeMascotas = this.mascotaServicio.findAll();
    }


    }
