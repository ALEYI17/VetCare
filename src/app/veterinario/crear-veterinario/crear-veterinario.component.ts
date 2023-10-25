import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent {

  // Variable para rastrear si el formulario ha sido enviado
  isSubmitted: boolean = false;

  // Variable que representa el formulario y sus controles
  VeterinarioForm! :FormGroup;

  iconoMenos = faArrowLeft

  
  constructor(private fb: FormBuilder,
    private veterinarioServivcio:VeterinarioServiceService,
    private router: Router,
    private location: Location){
      this.VeterinarioForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        especialidad:['', Validators.required],
        foto:['', Validators.required],
        contrasena:['', Validators.required]
      });
    }

    ngOnInit(){}
  // Método para crear un nuevo veterinario
    crearVeterinario(){
      this.isSubmitted=true;
      if(this.VeterinarioForm.valid){
        const VeterinarioData = this.VeterinarioForm.value;

         // Crea un objeto Veterinario con los datos del formulario
        const veterinario:Veterinario={
          cedula: VeterinarioData.cedula,
          contrasena: VeterinarioData.contrasena,
          especialidad: VeterinarioData.especialidad,
          foto: VeterinarioData.foto,
          nombre: VeterinarioData.nombre,
          id: 0,
          
        }

        console.log(veterinario);

        this.veterinarioServivcio.agregarVeterinario(veterinario).subscribe(
          data=>{
            complete:{
              this.VeterinarioForm.reset();
              this.isSubmitted=false;
              this.router.navigate(['/veterinarios/todos']);
            }
          }
        )
        
      }
    }
    goBack(){
      this.location.back();
    }
}
