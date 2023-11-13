import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-crud',
  templateUrl: './navbar-crud.component.html',
  styleUrls: ['./navbar-crud.component.css']
})
export class NavbarCrudComponent {


  currentRoute: string = ''; // Almacena la ruta actual


  //mirar en que url se encuentra
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('veterinario');
    this.router.navigate(['/login']);
  }

  
}
