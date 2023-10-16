import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaCrudComponent } from './Mascota/mascota-crud/mascota-crud.component';
import { CrearMascotaComponent } from './Mascota/crear-mascota/crear-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MascotaFindIdComponent } from './Mascota/mascota-find-id/mascota-find-id.component';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { ActualizarMascotaComponent } from './Mascota/actualizar-mascota/actualizar-mascota.component';
import { DashboardClienteComponent } from './clientes/dashboard-cliente/dashboard-cliente.component';
import { LoginComponent } from './Landing/login/login.component';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CrudClientesComponent } from './clientes/crud-clientes/crud-clientes.component';
import { ActualizarClienteComponent } from './clientes/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './clientes/mostrar-cliente/mostrar-cliente.component';
import { NavbarCrudComponent } from './Landing/navbar-crud/navbar-crud.component';
import { LoginVeterinarioComponent } from './Login/login-veterinario/login-veterinario.component';
import { LoginClienteComponent } from './Login/login-cliente/login-cliente.component';
import { PaginaErrorComponent } from './Error/pagina-error/pagina-error.component';
import { VeterinarioCrudComponent } from './veterinario/veterinario-crud/veterinario-crud.component';
import { MostrarVeterinarioComponent } from './veterinario/mostrar-veterinario/mostrar-veterinario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { ActualizarVeterinarioComponent } from './veterinario/actualizar-veterinario/actualizar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { AgregarTratamientoComponent } from './Mascota/agregar-tratamiento/agregar-tratamiento.component';

import { LoginAdminComponent } from './Login/login-admin/login-admin.component';

import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { VetActivosComponent } from './Admin/Estadistica/vet-activos/vet-activos.component';
import { MedicamentosTratemientoComponent } from './Admin/Estadistica/medicamentos-tratemiento/medicamentos-tratemiento.component';


@NgModule({
  declarations: [
    AppComponent,
    MascotaCrudComponent,
    MascotaFindIdComponent,
    LandingPageComponent,
    CrearMascotaComponent,
    ActualizarMascotaComponent,
    DashboardClienteComponent,
    LoginComponent,
    CrudClientesComponent,
    ActualizarClienteComponent,
    CrearClienteComponent,
    MostrarClienteComponent,
    NavbarCrudComponent,
    LoginVeterinarioComponent,
    LoginClienteComponent,
    PaginaErrorComponent,
    VeterinarioCrudComponent,
    MostrarVeterinarioComponent,
    ActualizarVeterinarioComponent,
    CrearVeterinarioComponent,
    AgregarTratamientoComponent,
    LoginAdminComponent,
    AdminDashboardComponent,
    VetActivosComponent,
    MedicamentosTratemientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
