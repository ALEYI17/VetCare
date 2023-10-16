import { Component, ElementRef, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-medicamentos-tratemiento',
  templateUrl: './medicamentos-tratemiento.component.html',
  styleUrls: ['./medicamentos-tratemiento.component.css']
})
export class MedicamentosTratemientoComponent {


  data! :any

  @ViewChild('myChart1') myChart!: ElementRef;
  constructor(private estadisticasServicio:AdminService){
  }
  
  ngOnInit() {
    this.estadisticasServicio.getCantidadTratamientosPorTipoEnUltimoMes().subscribe(data => {
      this.data = data
      this.createGraph()
    });

  }

  createGraph() {
    const ctx = this.myChart.nativeElement.getContext('2d');

    const randomColors = this.data.map(() => this.getRandomColor());

    const myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        datasets: [
          {
            data: this.data.map((item: any) => item[1]),
            backgroundColor: randomColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        maintainAspectRatio: true, // Set to false to allow chart resizing
        responsive: true, // Set to true to enable responsiveness
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = this.data[context.dataIndex][0];
                const value = this.data[context.dataIndex][1];
                return `${label}: ${value}`;
              }
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
