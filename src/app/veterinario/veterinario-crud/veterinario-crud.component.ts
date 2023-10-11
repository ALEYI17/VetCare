import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-veterinario-crud',
  templateUrl: './veterinario-crud.component.html',
  styleUrls: ['./veterinario-crud.component.css']
})
export class VeterinarioCrudComponent {

  opened = false

  veterinarios!:Veterinario[];

  constructor(private veteriarioServicio:VeterinarioServiceService){}

  ngOnInit(){
    this.veteriarioServicio.findAll().subscribe(
      veterinarios=> this.veterinarios = veterinarios
    );

    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const clientTable = document.getElementById('clientTable');

    if (searchInput && clientTable) {
      const rows = clientTable.getElementsByTagName('tbody')[0]?.getElementsByTagName('tr');

      if (rows) {
        searchInput.addEventListener('input', function () {
          const searchText = searchInput.value.toLowerCase();

          for (let i = 0; i < rows.length; i++) {
            const clientRow = rows[i];
            const clientName = clientRow.getElementsByTagName('th')[0]?.textContent?.toLowerCase();

            if (clientName && clientName.includes(searchText)) {
              clientRow.style.display = '';
            } 
            else {
              clientRow.style.display = 'none';
            }
          }
        });
      }
    }
  }

  eliminarVeterinario(arg0: number) {
    this.veteriarioServicio.eliminarById(arg0);
    this.veterinarios = this.veterinarios.filter(cliente=>cliente.id !== arg0);
  }

}
