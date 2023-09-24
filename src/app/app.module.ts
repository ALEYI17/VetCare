import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaCrudComponent } from './Mascota/mascota-crud/mascota-crud.component';
import { MascotaFindIdComponent } from './Mascota/mascota-find-id/mascota-find-id.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaCrudComponent,
    MascotaFindIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
