import { Component ,Input} from '@angular/core';
import { Mascota } from '../../Entities/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { HttpErrorResponse } from '@angular/common/http';
import { Tratamiento } from 'src/app/Entities/tratamiento';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { Medicamento } from 'src/app/Entities/medicamento';
import { MedicamentoServiceService } from 'src/app/service/medicamento-service.service';
import { map } from 'rxjs';



@Component({
  selector: 'app-mascota-find-id',
  templateUrl: './mascota-find-id.component.html',
  styleUrls: ['./mascota-find-id.component.css'],
  providers: [DatePipe]
})
export class MascotaFindIdComponent {

  iconoMenos = faMinus
  @Input()
  Mascota!:Mascota

  dueno!:Cliente;

  tratamientos!:Tratamiento[];

  medicamento!:Medicamento;

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router,
    private tratamientoServicio:TratamientoServiceService,
    
    ){}

    

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get("id"));
    
        // Suscripción para obtener información de la mascota
        this.MascotaService.findById(id).subscribe(
          mascotaget => this.Mascota = mascotaget,
          (errorResponse: HttpErrorResponse) => {
            if (!errorResponse.ok) {
              // Manejar el error de la solicitud de la mascota aquí
              console.error("Error en la solicitud de la mascota:", errorResponse.status, errorResponse.statusText);
              this.router.navigate(['/error']);
              // Puedes mostrar un mensaje de error al usuario
              // this.errorMessageMascota = "Ocurrió un error en la solicitud de la mascota.";
            }
          }
        );

        this.MascotaService.findTratamientos(id).subscribe(
          tratamientGet=> this.tratamientos = tratamientGet
        )

        

        

        
    
        // Suscripción para obtener información del dueño
        this.MascotaService.findDuenoCompleto(id).subscribe(
          duenoGet => this.dueno = duenoGet,
          (errorResponse: HttpErrorResponse) => {
            if (!errorResponse.ok) {
              // Manejar el error de la solicitud del dueño aquí
              console.error("Error en la solicitud del dueño:", errorResponse.status, errorResponse.statusText);
              // Puedes mostrar un mensaje de error al usuario
              // this.errorMessageDueno = "Ocurrió un error en la solicitud del dueño.";
            }
          }
        );
      });
    }

    eliminarTratamiento(tratamiento:Tratamiento){
      this.tratamientoServicio.desactivar(tratamiento).subscribe();
      this.ngOnInit()
    }
}
