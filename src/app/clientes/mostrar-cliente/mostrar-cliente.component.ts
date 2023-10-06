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
    this.route.paramMap.subscribe(params=>{
      const id = Number(params.get("id"));
      this.clienteServicio.findById(id).subscribe(
        clienteget=>{this.cliente= clienteget
          this.pets = this.cliente.misMascotas ? this.cliente.misMascotas : [];
        }
        )
       
    })

  }

}
