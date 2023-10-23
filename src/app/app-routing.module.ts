import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaFindIdComponent } from './Mascota/mascota-find-id/mascota-find-id.component';
import { MascotaCrudComponent } from './Mascota/mascota-crud/mascota-crud.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { ActualizarMascotaComponent } from './Mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearMascotaComponent } from './Mascota/crear-mascota/crear-mascota.component';
import { LoginComponent } from './Landing/login/login.component';
import { CrudClientesComponent } from './clientes/crud-clientes/crud-clientes.component';
import { MostrarClienteComponent } from './clientes/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { LoginClienteComponent } from './Login/login-cliente/login-cliente.component';
import { LoginVeterinarioComponent } from './Login/login-veterinario/login-veterinario.component';
import { ActualizarClienteComponent } from './clientes/actualizar-cliente/actualizar-cliente.component';
import { DashboardClienteComponent } from './clientes/dashboard-cliente/dashboard-cliente.component';
import { PaginaErrorComponent } from './Error/pagina-error/pagina-error.component';
import { VeterinarioCrudComponent } from './veterinario/veterinario-crud/veterinario-crud.component';
import { MostrarVeterinarioComponent } from './veterinario/mostrar-veterinario/mostrar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { ActualizarVeterinarioComponent } from './veterinario/actualizar-veterinario/actualizar-veterinario.component';
import { AgregarTratamientoComponent } from './Mascota/agregar-tratamiento/agregar-tratamiento.component';
import { LoginAdminComponent } from './Login/login-admin/login-admin.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  
  { path: 'mascota/find/:id', component: MascotaFindIdComponent },
  { path: 'mascotas/todas', component: MascotaCrudComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'mascota/update/:id', component: ActualizarMascotaComponent },
  { path: 'mascotas/add', component: CrearMascotaComponent }, 
  { path: 'login', component: LoginVeterinarioComponent },
  { path: 'clientes/todos', component: CrudClientesComponent },
  { path: 'clientes/find/:id', component: MostrarClienteComponent },
  { path: 'login/cliente', component: LoginClienteComponent },
  { path: 'clientes/add', component: CrearClienteComponent },
  { path: 'clientes/update/:id', component: ActualizarClienteComponent },
  { path: 'cliente/:id', component: DashboardClienteComponent },
  { path: 'veterinarios/todos', component: VeterinarioCrudComponent },
  { path: 'veterinarios/find/:id', component: MostrarVeterinarioComponent },
  { path: 'veterinarios/add', component: CrearVeterinarioComponent },
  { path: 'veterinarios/update/:id', component: ActualizarVeterinarioComponent },
  { path: 'mascota/agregarTratamiento/:id', component: AgregarTratamientoComponent },
  { path: 'login/admin', component: LoginAdminComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: '**', component: PaginaErrorComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
