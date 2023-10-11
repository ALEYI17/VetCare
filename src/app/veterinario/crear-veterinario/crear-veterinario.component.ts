import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent {
  isSubmitted: boolean = false;
  VeterinarioForm! :FormGroup;

  constructor(private fb: FormBuilder,
    private veterinarioServivcio:VeterinarioServiceService,
    private router: Router){
      this.VeterinarioForm = this.fb.group({
        cedula: ['', Validators.required],
        nombre: ['', Validators.required],
        especialidad:['', Validators.required],
        foto:['', Validators.required],
        contrasena:['', Validators.required]
      });
    }

    ngOnInit(){}

    crearVeterinario(){
      this.isSubmitted=true;
      if(this.VeterinarioForm.valid){
        const VeterinarioData = this.VeterinarioForm.value;

        const veterinario:Veterinario={
          cedula: VeterinarioData.cedula,
          contrasena: VeterinarioData.contrasena,
          especialidad: VeterinarioData.especialidad,
          foto: VeterinarioData.foto,
          nombre: VeterinarioData.nombre,
          id: 0
        }

        console.log(veterinario);

        this.veterinarioServivcio.agregarVeterinario(veterinario).subscribe(
          data=>{
            complete:{
              this.VeterinarioForm.reset();
              this.isSubmitted=false;
              this.router.navigate(['/Veterinarios/todos']);
            }
          }
        )
        
      }
    }
}
