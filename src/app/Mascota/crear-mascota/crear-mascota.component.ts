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
      Nombre: ['', Validators.required],
      Raza: ['', Validators.required],
      Edad: [0, [Validators.required, Validators.min(0.01)]],
      Peso: [0, [Validators.required, Validators.min(0.01)]],
      Enfermedad: '',
      Foto: '',
      clientId: [0]
    });


  }

  agregarMascota() {
    

    this.isSubmited = true

    if (this.mascotaForm.valid) {
      const mascotaData = this.mascotaForm.value;
      const mascota: Mascota = {
        nombre: mascotaData.Nombre,
        raza: mascotaData.Raza,
        edad: mascotaData.Edad,
        peso: mascotaData.Peso,
        enfermedad: mascotaData.Enfermedad,
        foto: mascotaData.Foto,
        id: mascotaData.clientId // Assuming you want to use clientId as ID
      };
      this.mascotaService.agregarMascota(mascota);
      this.mascotaForm.reset(); // Optional: reset the form after adding the mascota
      this.isSubmited = false
      this.router.navigate(['/Mascotas/todas']);
    }
  }
  
}
