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

  mascota: Mascota = {
    Nombre:  "",
    Raza: "",
    Edad: 0,
    Peso: 0,
    Enfermedad : "",
    Foto : "",
    ID : 0,
  }

  agregarMascota(form:any){
    //para copiar los valores
    this.sendMascota = Object.assign({}, this.mascota);
      
    this.addMascotaEvent.emit(this.sendMascota);
  }

}
