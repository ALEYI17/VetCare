import { Component, EventEmitter, Output } from '@angular/core';

import { Mascota } from '../../Entities/mascota';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from 'src/app/service/mascota.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';



@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})

export class CrearMascotaComponent {

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;


  isSubmited : boolean = false

  mascotaForm: FormGroup;

  clientes!: Cliente[];


  constructor(private fb: FormBuilder,private mascotaService: MascotaService,private router: Router,private clienteService : ClienteServiceService) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: [0, [Validators.required, Validators.min(0.01)]],
      peso: [0, [Validators.required, Validators.min(0.01)]],
      enfermedad: '',
      foto: '',
      clientId: [0 , Validators.required]
    });


  }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe( 
      clientesget => this.clientes = clientesget
    )
  }

  agregarMascota() {
    

    this.isSubmited = true

    if (this.mascotaForm.valid) {
      const mascotaData = this.mascotaForm.value;

      if (mascotaData.clientId === 0) {
        // Si el clientId es 0 (valor por defecto), muestra un error y no permite la validación
        this.mascotaForm.get('clientId')?.setErrors({ 'invalidClient': true });
        this.isSubmited = false
        return;
      }


      const mascota: Mascota = {
        nombre: mascotaData.nombre,
        raza: mascotaData.raza,
        edad: mascotaData.edad,
        peso: mascotaData.peso,
        enfermedad: mascotaData.enfermedad,
        foto: mascotaData.foto,
        id: 0 
      };  
      console.log(mascota);
      
      this.mascotaService.agregarMascota(mascota, mascotaData.clientId);
      this.mascotaForm.reset(); // Optional: reset the form after adding the mascota
      this.isSubmited = false
      this.router.navigate(['/Mascotas/todas']);
    }
  }


  selectClient(cliente: Cliente) {
    // Get the client ID from the selected client
    const clientId = cliente.id;

    console.log(`la id del cleitne escogida es ${clientId}`);
    

    // Update the form control with the selected client's ID
    this.mascotaForm.patchValue({ clientId });

    // Update the content of the <span> element
    const selectedClientSpan = document.querySelector(".select-btn span");
    selectedClientSpan!.textContent = "Dueño: " + cliente.nombre;

    // Close the client list
    const wrapper = document.querySelector(".wrapper");
    wrapper!.classList.remove("active");
  }


  toggleWrapper() {
    const wrapper = document.querySelector(".wrapper");
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


  
  
}
