import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';


@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})

export class CrearMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  formMascota: Mascota = {
    Nombre: "",
    Raza: "",
    Edad: 0,
    Peso: 0,
    Enfermedad : "",
    Foto : "",
    ID : 0,
  }

  agregarMascota(form: any) {
    this.sendMascota = Object.assign({}, this.formMascota);
    console.log('Mascota added:', this.sendMascota);
    this.addMascotaEvent.emit(this.sendMascota);
    
  }
  

}
