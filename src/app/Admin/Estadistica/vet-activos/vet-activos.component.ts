import { Component } from '@angular/core';
import { BarController, BarElement, CategoryScale, Decimation, Filler, Legend, Title, Tooltip } from 'chart.js';
import { AdminService } from 'src/app/service/admin.service';
import 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vet-activos',
  templateUrl: './vet-activos.component.html',
  styleUrls: ['./vet-activos.component.css']
})
export class VetActivosComponent {

  activeVeterinarios!: number;
  inactiveVeterinarios!: number;

  constructor(private estadisticasServicio:AdminService){
  }

  ngOnInit() {
    this.estadisticasServicio.getVeterinariosActivos().subscribe(data => {
      this.activeVeterinarios = data;

    });
    this.estadisticasServicio.getVeterinariosIncativos().subscribe(data => {
      this.inactiveVeterinarios = data;
      this.createGraph();
    });
  }

  createGraph() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Activos', 'inactivos'],
        datasets: [
          {
            label: 'Veterinarios',
            data: [this.activeVeterinarios, this.inactiveVeterinarios],
            backgroundColor: ['#36A2EB', '#FF6384'],
            borderWidth: 1
          }
        ]
      }
    });
  }
  


}
