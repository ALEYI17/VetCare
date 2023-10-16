import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from 'src/app/Entities/mascota';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tratamiento } from 'src/app/Entities/tratamiento';
import { HttpErrorResponse } from '@angular/common/http';
import { Medicamento } from 'src/app/Entities/medicamento';
import { MedicamentoServiceService } from 'src/app/service/medicamento-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import { Veterinario } from 'src/app/Entities/veterinario';

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

  medicamentos!:Medicamento[];

  veterinarios!:Veterinario[];

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private medicamentoServicio:MedicamentoServiceService,
    private veterinarioServicio:VeterinarioServiceService
    ){
    this.tratamientoForm = this.fb.group({
      fecha:['', Validators.required],
      precio:[0, [Validators.required, Validators.min(0.01)]],
      medicamento:["" , Validators.required],
      mascota:["" , Validators.required],
      veterinario:["" , Validators.required],
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

    this.medicamentoServicio.findAll().subscribe(data=> this.medicamentos = data);

    this.veterinarioServicio.findAll().subscribe(data=>this.veterinarios = data)
    
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

  toggleWrapper() {
    const wrapper = document.querySelector(".wrapper");
    wrapper!.classList.toggle("active");
  }

  toggleWrapper2() {
    const wrapper = document.querySelector(".wrapper2");
    wrapper!.classList.toggle("active");
  }

  filterOptionsList() {
    const optionsList = document.querySelector(".options") as HTMLUListElement;
    const optionItems = optionsList.querySelectorAll("li") as NodeListOf<HTMLLIElement>;
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  
    const searchTerm = searchInput.value.toLowerCase();
  
    optionItems.forEach(function (item) {
      const text = item.textContent!.toLowerCase();
  
      if (text.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  selectClient(cliente: Medicamento) {
    // Get the client ID from the selected client
    const clientId = cliente.id;
    const MedicamentoNombre = cliente.nombre

    console.log(`la id del medicamento escogida es ${clientId}`);
    console.log(`el nombre del medicamento escogida es ${MedicamentoNombre}`);

    // Update the form control with the selected client's ID
    this.tratamientoForm.patchValue({ clientId });

    // Update the content of the <span> element
    const selectedClientSpan = document.querySelector(".select-btn span");
    selectedClientSpan!.textContent = "medicamento: " + cliente.nombre;

    // Close the client list
    const wrapper = document.querySelector(".wrapper");
    wrapper!.classList.remove("active");
  }

  selectVeterinario(cliente: Veterinario) {
    // Get the client ID from the selected client
    const clientId = cliente.id;
    const MedicamentoNombre = cliente.nombre

    console.log(`la id del medicamento escogida es ${clientId}`);
    console.log(`el nombre del medicamento escogida es ${MedicamentoNombre}`);

    // Update the form control with the selected client's ID
    this.tratamientoForm.patchValue({ clientId });

    // Update the content of the <span> element
    const selectedClientSpan = document.querySelector(".select-btn2 span");
    selectedClientSpan!.textContent = "Veterinario: " + cliente.nombre;

    // Close the client list
    const wrapper = document.querySelector(".wrapper2");
    wrapper!.classList.remove("active");
  }

}
