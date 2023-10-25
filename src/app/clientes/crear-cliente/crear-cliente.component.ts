import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  // Propiedad para verificar si el formulario ha sido enviado
  isSubmitted: boolean = false;
   // Propiedad para el formulario del cliente
  clienteForm! :FormGroup;

  iconoMenos = faArrowLeft
  constructor(
    private fb: FormBuilder,
    private clienteServicio: ClienteServiceService,
    private router: Router,
    private location: Location
  ) {
    this.clienteForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      corre: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required]
    });
  }


  ngonInit(){

  }
 // Método para crear un nuevo cliente
  crearCliente(){
    this.isSubmitted = true;
    if(this.clienteForm.valid){
      const clienteData = this.clienteForm.value;

      const cliente:Cliente ={
        cedula:clienteData.cedula,
        celular:clienteData.celular,
        corre:clienteData.corre,
        nombre:clienteData.nombre,
        id:0
      }

      console.log(cliente)
 // Llama al servicio para agregar el nuevo cliente
      this.clienteServicio.agregarCliente(cliente).subscribe(
        data=>{
          complete:{
            this.clienteForm.reset(); // Optional: reset the form after adding the mascota
            this.isSubmitted = false
            this.router.navigate(['/clientes/todos']);
          }
        }
      );

    }
  }
  goBack(){
    this.location.back();
  }
}
