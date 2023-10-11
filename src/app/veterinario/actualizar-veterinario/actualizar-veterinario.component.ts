import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-actualizar-veterinario',
  templateUrl: './actualizar-veterinario.component.html',
  styleUrls: ['./actualizar-veterinario.component.css']
})
export class ActualizarVeterinarioComponent {

  sendVeterinario!:Veterinario;

  formVeterinario!:Veterinario;

  isSubmited : boolean = false

  constructor(private veterinarioServicio:VeterinarioServiceService,
    private route:ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(){
      this.route.paramMap.subscribe(params=>{
        const id = Number(params.get("id"));
        this.veterinarioServicio.findByid(id).subscribe(
          mascota => this.formVeterinario =mascota
        )
        
      })
    }

    updateVeterinario(){
      this.sendVeterinario = Object.assign({}, this.formVeterinario);
      console.log("Veterinario actualizado",this.sendVeterinario);
      this.veterinarioServicio.updateVeterinario(this.sendVeterinario).subscribe(
        data=>{
          complete:{
            this.isSubmited = false
            this.router.navigate(['/Veterinarios/todos']);
          }
        }
      )
      
    }
}
