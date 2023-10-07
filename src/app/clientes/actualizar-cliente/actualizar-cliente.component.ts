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

  FormCliente!:Cliente;
  sendCliente!:Cliente;

  constructor(private route:ActivatedRoute,
    private router: Router,
    private clienteServicio:ClienteServiceService){}

  ngOnInit(){

    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get("id"));
      this.clienteServicio.findById(id).subscribe(
        cliente => this.FormCliente = cliente
      )
    })

  }

  editarCliente(){
    this.sendCliente = Object.assign({}, this.FormCliente);
    console.log('Cliente update:', this.sendCliente);
    this.sendCliente.misMascotas = undefined;
    this.clienteServicio.updateCliente(this.sendCliente).subscribe(
      data=>{
        complete:{
          this.router.navigate(['/Clientes/todos']);
        }
      }
    );

  }
}
