import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Chart from 'chart.js/auto';
import { Medicamento } from 'src/app/Entities/medicamento';

@Component({
  selector: 'app-top-medicamentos',
  templateUrl: './top-medicamentos.component.html',
  styleUrls: ['./top-medicamentos.component.css']
})
export class TopMedicamentosComponent {

// recibir la query
  topMedicamentos!:Medicamento[]

  constructor(private estadisticasServicio:AdminService){
  }

  ngOnInit() {
    this.estadisticasServicio.getTop3Medicamneto().subscribe(data => {
      // console.log(data);
      this.topMedicamentos = data
      this.createGraph()
    });
  }
//crear grafica
  createGraph() {
    const ctx = document.getElementById('myChart3') as HTMLCanvasElement;

    const randomColors = this.topMedicamentos.map(() => this.getRandomColor());

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.topMedicamentos.map((item: Medicamento) => item.nombre),
        datasets: [
          {
            label: 'Medicamentos',
            data: this.topMedicamentos.map((item: Medicamento) => item.unidadesVendidas),
            backgroundColor: randomColors,
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

  getRandomColor() {
    // Generate a random hex color code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
