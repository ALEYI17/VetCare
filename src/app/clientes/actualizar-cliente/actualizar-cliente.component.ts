import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {
  
// Propiedad para almacenar los datos del cliente a editar
  FormCliente!:Cliente;
   // Propiedad para almacenar los datos del cliente a enviar al servidor
  sendCliente!:Cliente;

  constructor(private route:ActivatedRoute,
    private router: Router,
    private clienteServicio:ClienteServiceService){}

  ngOnInit(){
// Obtiene el parámetro de la URL que representa el ID del cliente
    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get("id"));
      this.clienteServicio.findById(id).subscribe(
        cliente => this.FormCliente = cliente
      )
    })

  }
 // Método para actualizar la información del cliente
  editarCliente(){
    this.sendCliente = Object.assign({}, this.FormCliente);
    console.log('Cliente update:', this.sendCliente);
    this.sendCliente.misMascotas = undefined;
    this.clienteServicio.updateCliente(this.sendCliente).subscribe(
      data=>{
        complete:{
          this.router.navigate(['/clientes/todos']);
        }
      }
    );

  }
}
