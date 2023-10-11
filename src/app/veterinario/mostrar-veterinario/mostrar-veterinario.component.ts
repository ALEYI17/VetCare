import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-mostrar-veterinario',
  templateUrl: './mostrar-veterinario.component.html',
  styleUrls: ['./mostrar-veterinario.component.css']
})
export class MostrarVeterinarioComponent {

  veterinario!:Veterinario;
  constructor(private veterinarioServicio:VeterinarioServiceService,private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.veterinarioServicio.findByid(id).subscribe(
        (clienteget) => {
          // Lógica para manejar la respuesta exitosa
          this.veterinario = clienteget;
          
        },
        (errorResponse: HttpErrorResponse) => {
          if (!errorResponse.ok) {
            // La respuesta indica un error, puedes manejarlo aquí
            console.error("Error en la solicitud:", errorResponse.status, errorResponse.statusText);
            this.router.navigate(['/error']);
            // Puedes mostrar un mensaje de error al usuario
            // this.errorMessage = "Ocurrió un error en la solicitud.";
          }
        }
      );
    });
  }

}
