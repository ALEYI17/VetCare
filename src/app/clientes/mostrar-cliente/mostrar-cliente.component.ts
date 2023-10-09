import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { Mascota } from 'src/app/Entities/mascota';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent {

  cliente! :Cliente;

  pets!: Mascota[];

  constructor(private clienteServicio:ClienteServiceService,
    private route:ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.clienteServicio.findById(id).subscribe(
        (clienteget) => {
          // Lógica para manejar la respuesta exitosa
          this.cliente = clienteget;
          this.pets = this.cliente.misMascotas ? this.cliente.misMascotas : [];
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
