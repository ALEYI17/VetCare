import { Component } from '@angular/core';
import { Cliente } from 'src/app/Entities/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-crud-clientes',
  templateUrl: './crud-clientes.component.html',
  styleUrls: ['./crud-clientes.component.css']
})
export class CrudClientesComponent {


  listaclientes!: Cliente[];

  constructor(private clienteservice: ClienteServiceService) {

  }


  ngOnInit(): void {

    this.clienteservice.findAll().subscribe(
      clientes => this.listaclientes = clientes
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
  
  scrollToBottom() {
    const element = document.getElementById('abajo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTop() {
    const element = document.getElementById('arriba');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  eliminarMascota(arg0: string) {
    this.clienteservice.eliminarCliente(arg0);
    this.listaclientes = this.listaclientes.filter(cliente=>cliente.cedula !== arg0);
  }
}
