import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaCrudComponent } from './Mascota/mascota-crud/mascota-crud.component';
import { CrearMascotaComponent } from './Mascota/crear-mascota/crear-mascota.component';
import { FormsModule } from '@angular/forms';
import { MascotaFindIdComponent } from './Mascota/mascota-find-id/mascota-find-id.component';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MascotaCrudComponent,
    MascotaFindIdComponent,
    LandingPageComponent,
    CrearMascotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
