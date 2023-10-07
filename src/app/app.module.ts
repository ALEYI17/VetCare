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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
