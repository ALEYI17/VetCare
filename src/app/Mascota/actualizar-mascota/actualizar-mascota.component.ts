import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {
  
  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  @Input()
  formMascota!: Mascota; 

  updateMascota(form: any) {
    this.sendMascota = Object.assign({}, this.formMascota);
    console.log('Mascota added:', this.sendMascota);
    this.addMascotaEvent.emit(this.sendMascota);
    
  }

  findById(mascota:Mascota){
    this.formMascota = mascota
  }
  
}
