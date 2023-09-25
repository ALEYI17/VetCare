import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Entities/veterinario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
onSubmit() {

}
  veterinario: Veterinario = { id: 0,cedula: '', contrasena: '', especialidad: '', foto: '', numeroDeAtenciones: 0 };
  errorMessage: string | undefined;
}
