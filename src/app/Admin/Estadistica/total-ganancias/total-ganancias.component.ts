import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-ganancias',
  templateUrl: './total-ganancias.component.html',
  styleUrls: ['./total-ganancias.component.css']
})
export class TotalGananciasComponent {

  gananciasTotales!:number;

  constructor(private admisService: AdminService){}

  ngOnInit(){

    // cosneguir query ganancias
    this.admisService.getGananciasTotales().subscribe(
      data=> this.gananciasTotales = data
    );
  }
}
