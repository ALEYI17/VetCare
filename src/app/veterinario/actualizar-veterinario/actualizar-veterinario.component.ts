import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
@Component({
  selector: 'app-actualizar-veterinario',
  templateUrl: './actualizar-veterinario.component.html',
  styleUrls: ['./actualizar-veterinario.component.css']
})
export class ActualizarVeterinarioComponent {

  // Variables para manejar el formulario y el objeto Veterinario
  sendVeterinario!:Veterinario;

  formVeterinario!:Veterinario;
 // Variable para rastrear si el formulario ha sido enviado
  isSubmited : boolean = false

  iconoMenos = faArrowLeft

  constructor(private veterinarioServicio:VeterinarioServiceService,
    private route:ActivatedRoute,
    private router: Router,
    private location: Location
    ){}

    ngOnInit(){

      // Suscribe al paramMap del ActivatedRoute para obtener el ID del veterinario de la URL
      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get("id"));
        this.veterinarioServicio.findByid(id).subscribe(
          mascota => this.formVeterinario =mascota
        )
        
      })
    }

    updateVeterinario(){

      // Llama al servicio para obtener los detalles del veterinario por su ID
      this.sendVeterinario = Object.assign({}, this.formVeterinario);
      console.log("Veterinario actualizado",this.sendVeterinario);
      this.veterinarioServicio.updateVeterinario(this.sendVeterinario).subscribe(
        data=>{
          complete:{
            this.isSubmited = false
            this.router.navigate(['/veterinarios/todos']);
          }
        }
      )
      
    }

    goBack(){
      this.location.back();
    }
}
