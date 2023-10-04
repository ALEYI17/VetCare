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

const routes: Routes = [
  
  { path: 'Mascota/find/:id', component: MascotaFindIdComponent },
  { path: 'Mascotas/todas', component: MascotaCrudComponent },
  { path: 'Home', component: LandingPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Mascota/update/:id', component: ActualizarMascotaComponent },
  { path: 'Mascotas/add', component: CrearMascotaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Clientes/todos', component: CrudClientesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
