import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from 'src/app/Entities/mascota';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tratamiento } from 'src/app/Entities/tratamiento';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregar-tratamiento',
  templateUrl: './agregar-tratamiento.component.html',
  styleUrls: ['./agregar-tratamiento.component.css']
})
export class AgregarTratamientoComponent {

  mascota!:Mascota;

  idMascota:number = -1;

  tratamientoForm: FormGroup;

  isSubmited : boolean = false

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ){
    this.tratamientoForm = this.fb.group({
      fecha:['', Validators.required],
      precio:[0, [Validators.required, Validators.min(0.01)]],
      medicamento:[0 , Validators.required],
      mascota:[0 , Validators.required],
      veterinario:[0 , Validators.required],
    });
    }

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.idMascota = Number(params.get("id"));
    })

    this.MascotaService.findById(this.idMascota).subscribe( mascotaget => this.mascota = mascotaget,
      (errorResponse: HttpErrorResponse) => {
        if (!errorResponse.ok) {
          // Manejar el error de la solicitud de la mascota aquí
          console.error("Error en la solicitud de la mascota:", errorResponse.status, errorResponse.statusText);
          this.router.navigate(['/error']);
          // Puedes mostrar un mensaje de error al usuario
          // this.errorMessageMascota = "Ocurrió un error en la solicitud de la mascota.";
        }
      })
  }

  agregarTratamiento(){
    this.isSubmited = true;
    if(this.tratamientoForm.valid){
      const tratamientoData = this.tratamientoForm.value;

      if(tratamientoData.veterinarioId ===0){
        this.tratamientoForm.get('veterinarioId')?.setErrors({ 'invalidVeterinario': true });
        this.isSubmited = false
        return;
      }

      if(tratamientoData.MascotaId ===0){
        this.tratamientoForm.get('MascotaId')?.setErrors({ 'invalidMascota': true });
        this.isSubmited = false
        return;
      }

      if(tratamientoData.MedicamentoId ===0){
        this.tratamientoForm.get('MedicamentoId')?.setErrors({ 'invalidMedicamento': true });
        this.isSubmited = false
        return;
      }

      const tratamiento:Tratamiento={
        id: 0,
        fecha: tratamientoData.fecha,
        precio: tratamientoData.precio,
        activo: true,
        medicamentos:tratamientoData.medicamento,
        mascota:this.mascota,
        veterinario:tratamientoData.veterinario
      }
    }
  }

}
