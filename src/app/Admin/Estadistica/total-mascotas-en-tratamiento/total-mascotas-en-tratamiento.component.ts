import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-mascotas-en-tratamiento',
  templateUrl: './total-mascotas-en-tratamiento.component.html',
  styleUrls: ['./total-mascotas-en-tratamiento.component.css']
})
export class TotalMascotasEnTratamientoComponent {

  TratamientosActivos!:number;

  constructor(private admisService: AdminService){}

  ngOnInit(){
    //conseguir query de tratamintos activos
    this.admisService.getTratemientosActivos().subscribe(
      data=> this.TratamientosActivos = data
    );
  }

}
