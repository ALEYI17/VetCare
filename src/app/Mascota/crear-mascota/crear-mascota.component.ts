import { Component, EventEmitter, Output } from '@angular/core';

import { Mascota } from '../../Entities/mascota';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from 'src/app/service/mascota.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})

export class CrearMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;


  isSubmited : boolean = false

  mascotaForm: FormGroup;


  constructor(private fb: FormBuilder,private mascotaService: MascotaService,private router: Router) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(0.01)]],
      peso: [0, [Validators.required, Validators.min(0.01)]],
      enfermedad: '',
      foto: '',
      clientId: [1]
    });


  }

  agregarMascota() {
    

    this.isSubmited = true

    if (this.mascotaForm.valid) {
      const mascotaData = this.mascotaForm.value;
      const mascota: Mascota = {
        nombre: mascotaData.nombre,
        raza: mascotaData.raza,
        edad: mascotaData.edad,
        peso: mascotaData.peso,
        enfermedad: mascotaData.enfermedad,
        foto: mascotaData.foto,
        id: 0 // Assuming you want to use clientId as ID
      };  
      console.log(mascota);
      
      this.mascotaService.agregarMascota(mascota, mascotaData.clientId);
      this.mascotaForm.reset(); // Optional: reset the form after adding the mascota
      this.isSubmited = false
      this.router.navigate(['/Mascotas/todas']);
    }
  }
  
}
