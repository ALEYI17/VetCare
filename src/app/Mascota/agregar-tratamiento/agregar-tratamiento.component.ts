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
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agregar-tratamiento',
  templateUrl: './agregar-tratamiento.component.html',
  styleUrls: ['./agregar-tratamiento.component.css']
})
export class AgregarTratamientoComponent {
  miIcopno = faCaretDown;
  mascota!:Mascota;

  idMedicamento:number = -1;

  idVeterinario:number = -1;
  idMascota:number = -1;

  tratamientoForm: FormGroup;

  isSubmited : boolean = false

  medicamentos!:Medicamento[];

  veterinarios!:Veterinario[];
  veterinario!:Veterinario;
  precio!:number;

  constructor(
    private MascotaService: MascotaService,
    private route:ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private medicamentoServicio:MedicamentoServiceService,
    private veterinarioServicio:VeterinarioServiceService,
    private tratamientoServicio:TratamientoServiceService,
    ){
    this.tratamientoForm = this.fb.group({
      fecha:['', Validators.required],
      precio:[0, [Validators.required, Validators.min(0.01)]],
      medicamento:[0 , Validators.required],
      mascota:[0 , Validators.required],
      veterinario:[0 , Validators.required],
    });

    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.veterinario = state['veterinario'];
      this.idVeterinario = this.veterinario.id
      console.log(this.veterinario);
      
    }
    
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
      console.log("entro");
      
      const tratamientoData = this.tratamientoForm.value;

      if(this.idVeterinario === -1){
        this.tratamientoForm.get('veterinario')?.setErrors({ 'invalidVeterinario': true });
        this.isSubmited = false
        return;
      }



      if(this.idMedicamento ===-1){
        this.tratamientoForm.get('medicamento')?.setErrors({ 'invalidMedicamento': true });
        this.isSubmited = false
        return;
      }

      const tratamiento:Tratamiento={
        id: 0,
        fecha: tratamientoData.fecha,
        precio: tratamientoData.precio,
        activo: true,
      }

      console.log(tratamiento);
      this.tratamientoServicio.crearTratamiento(this.idMedicamento,this.idMascota,this.idVeterinario,tratamiento).subscribe(
        data=>{
          complete:{
            this.tratamientoForm.reset(); // Optional: reset the form after adding the mascota
            this.isSubmited = false
            this.router.navigate(['/Mascotas/todas']);
          }
        }
      );
      
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
    this.idMedicamento = clientId

    // Update the form control with the selected client's ID
    this.tratamientoForm.patchValue({ clientId });

    // Update the content of the <span> element
    const selectedClientSpan = document.querySelector(".select-btn span");
    selectedClientSpan!.textContent = "medicamento: " + cliente.nombre;

    // Close the client list
    const wrapper = document.querySelector(".wrapper");
    wrapper!.classList.remove("active");
    this.precio = cliente.precioVenta;
  }

  selectVeterinario(cliente: Veterinario) {
    // Get the client ID from the selected client
    const clientId = cliente.id;
    const MedicamentoNombre = cliente.nombre

    console.log(`la id del medicamento escogida es ${clientId}`);
    console.log(`el nombre del medicamento escogida es ${MedicamentoNombre}`);
    this.idVeterinario = clientId
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
