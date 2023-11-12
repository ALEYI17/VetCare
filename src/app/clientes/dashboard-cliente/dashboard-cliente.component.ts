import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent {

  cliente!:Cliente; // Replace with your actual data
  clientId: number | undefined;

  constructor(private router: Router,private clienteservice:ClienteServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
// Obtiene el parámetro de la ruta (id) usando ActivatedRoute
    /*this.route.paramMap.subscribe(params=>{
      const id = Number(params.get("id"));
      this.clienteservice.findById(id).subscribe(
        cliente => this.cliente = cliente
      )
    })*/

    this.clienteservice.clienteHome().subscribe(cliente=>{
      this.cliente = cliente
    })
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login/cliente']);
  }

}
