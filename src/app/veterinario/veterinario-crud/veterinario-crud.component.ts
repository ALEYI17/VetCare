import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Entities/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-veterinario-crud',
  templateUrl: './veterinario-crud.component.html',
  styleUrls: ['./veterinario-crud.component.css']
})
export class VeterinarioCrudComponent {
 // Variable para controlar el estado del componente (abierto o cerrado)
  opened = false
// Arreglo que contendrá la lista de veterinarios
  veterinarios!:Veterinario[];

  constructor(private veteriarioServicio:VeterinarioServiceService){}

  ngOnInit(){
    // Llama al método findAll del servicio para obtener la lista de veterinarios
    this.veteriarioServicio.findAll().subscribe(
      veterinarios=> this.veterinarios = veterinarios
    );

 // Obtiene referencias a elementos del DOM
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const clientTable = document.getElementById('clientTable');

     // Verifica si los elementos existen
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
