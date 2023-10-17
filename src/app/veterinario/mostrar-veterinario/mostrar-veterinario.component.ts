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

  // Variable que contendrá la información del veterinario
  veterinario!:Veterinario;

  // Constructor que inyecta el servicio de Veterinario, ActivatedRoute y Router
  constructor(private veterinarioServicio:VeterinarioServiceService,private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(){

     // Suscribe al paramMap del ActivatedRoute para obtener el ID del veterinario de la URL
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      // Llama al servicio para obtener los detalles del veterinario por su ID
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
