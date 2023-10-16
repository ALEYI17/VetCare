import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-tratamientos-ultimo-mes',
  templateUrl: './tratamientos-ultimo-mes.component.html',
  styleUrls: ['./tratamientos-ultimo-mes.component.css']
})
export class TratamientosUltimoMesComponent {

  canTratamientosMes!:number;

  constructor(private admisService: AdminService){}

  ngOnInit(){
    this.admisService.getTratamientosUltimoMes().subscribe(
      data=> this.canTratamientosMes = data
    );
  }

}
