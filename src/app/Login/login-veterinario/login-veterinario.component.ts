import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/Entities/veterinario';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  constructor(private loginservice: LoginServiceService,private router: Router){}

  veterinario: Veterinario = { id: 0,cedula: '', contrasena: '', especialidad: '', foto: '', nombre: '' };
  errorMessage: string | undefined;
  respuesta!:boolean

  onSubmit() {

    console.log(this.veterinario);

    this.loginservice.authvet(this.veterinario).subscribe(
      res => {
        this.respuesta = res;
        // Verificar la respuesta y mostrar el mensaje de error si es necesario
        if (!this.respuesta) {
          this.errorMessage = 'Credenciales de inicio de sesión no válidas';
        }else{
          this.router.navigate(['/Mascotas/todas']);
        }
      }
    );

    

  }
}

