import { Component } from '@angular/core';
import { Veterinario } from 'src/app/Entities/veterinario';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  onSubmit() {}

  veterinario: Veterinario = { id: 0,cedula: '', contrasena: '', especialidad: '', foto: '', numeroDeAtenciones: 0 };
  errorMessage: string | undefined;
}

