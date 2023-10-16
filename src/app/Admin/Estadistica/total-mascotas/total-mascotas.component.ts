import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-total-mascotas',
  templateUrl: './total-mascotas.component.html',
  styleUrls: ['./total-mascotas.component.css']
})
export class TotalMascotasComponent {

  mascotasTotales!:number;

  constructor(private admisService: AdminService){}

  ngOnInit(){
    this.admisService.getMascotasTotales().subscribe(
      data=> this.mascotasTotales = data
    );

  }

}
