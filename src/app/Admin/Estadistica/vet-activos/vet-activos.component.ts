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

  //recibir la query
  activeVeterinarios!: number;
  inactiveVeterinarios!: number;

  constructor(private estadisticasServicio:AdminService){
  }

  ngOnInit() {
    this.estadisticasServicio.getVeterinariosData().subscribe(data => {
      this.activeVeterinarios= data.activos
      this.inactiveVeterinarios=  data.inactivos
      this.createGraph()
    });
  }
//crear grafica
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
            borderWidth: 1,
            
          }
        ]
      },options:{
        plugins :{
          legend: {
            labels: {
              color: "black",
              font: {
                size: 14
            }
            },
             // Position the legend below the chart
          }
        },
        scales: {
          x: {
            ticks: {
              color: "black",
              
          }
          }
      }

      }
    });
    
  }
  


}
