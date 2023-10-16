import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-aventas',
  templateUrl: './total-aventas.component.html',
  styleUrls: ['./total-aventas.component.css']
})
export class TotalAventasComponent {

  VentasTotales!:number;

  constructor(private admisService: AdminService){}

  ngOnInit(){
    this.admisService.getVentasTotales().subscribe(
      data=> this.VentasTotales = data
    );
  }

}
