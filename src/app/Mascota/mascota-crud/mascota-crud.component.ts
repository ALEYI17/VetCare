import { Component } from '@angular/core';
import { Mascota } from '../../Entities/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
@Component({
  selector: 'app-mascota-crud',
  templateUrl: './mascota-crud.component.html',
  styleUrls: ['./mascota-crud.component.css']
})
export class MascotaCrudComponent {
  selectedMascota!: Mascota;
  mostrarforman: boolean = false;
  mostrarforman2: boolean = false;


  listaDeMascotas!: Mascota[];
  veterinario!: Veterinario;


  constructor(private mascotaServicio: MascotaService,private snackBar: MatSnackBar,private VeterinarioService: VeterinarioServiceService) {}

  // mostrarMascota(mascota: Mascota) {
  //   this.selectedMascota = mascota;
  //   this.mostrarforman2 = true
  // }

  // onMascotaAdded(newMascota: Mascota) {
  //   // Push the new pet to the array
  //   this.listaDeMascotas.push(newMascota);
  //   console.log('Mascota added to listaDeMascotas:', newMascota);
  // }
  // actualizarMascota(updateMascota: Mascota) {
  //   const id = updateMascota.ID - 1
  //   this.listaDeMascotas[id] = updateMascota

  // }

  eliminarMascota(id :number) {
    
    this.mascotaServicio.eliminarMascota(id)
    this.listaDeMascotas = this.listaDeMascotas.filter(mascota => mascota.id !== id);
  }

  mostararAnadir() {
    this.mostrarforman = true
  }
  ngOnInit(): void {

    this.VeterinarioService.veterinarioHome().subscribe(res => {
      this.veterinario = res;
      localStorage.setItem('veterinario', JSON.stringify(this.veterinario));
    })

    this.mascotaServicio.findAll().subscribe(
      mascotas =>{ this.listaDeMascotas = mascotas
        complete:{
          this.buscar()
        }
      }
      );

      


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

  buscar(){
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

  toggleMascotaTratamiento(mascota: Mascota) {
    console.log("Entro");
    
    
    console.log(mascota.id);
    console.log(mascota.mascotaTratamiento);
    
    
    // Call the service method to update the mascota's state on the server
    this.mascotaServicio.cambiarEstado(mascota.id, mascota.mascotaTratamiento).subscribe(
      response  => {
        if (response === false) {
          this.showError("Acción denegada")
          mascota.mascotaTratamiento = false;
        } 
      },

    );
    
    
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-toast'],
    });
  }

}

