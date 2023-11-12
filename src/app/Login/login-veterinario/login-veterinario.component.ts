import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Entities/user';
import { Veterinario } from 'src/app/Entities/veterinario';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {

  constructor(private loginservice: LoginServiceService,private router: Router,private route: ActivatedRoute){}

// Objeto para almacenar las credenciales del veterinario
  veterinario: User = { cedula: '', contrasena: ''};
  // Propiedad para almacenar mensajes de error
  errorMessage: string | undefined;
  // Propiedad para almacenar la respuesta de la autenticación
  respuesta!:boolean

  onSubmit() {

    console.log(this.veterinario);
    // Llama al servicio de autenticación para verificar las credenciales del veterinario
    // this.loginservice.authvet(this.veterinario).subscribe(
    //   res => {
    //     this.veterinario = res;
    //     // Verificar la respuesta y mostrar el mensaje de error si es necesario
    //     if (this.veterinario.nombre == "mal") {
    //       this.veterinario = { id: 0,cedula: '', contrasena: '', especialidad: '', foto: '', nombre: '' };
    //       this.errorMessage = 'Credenciales de inicio de sesión no válidas';
    //     }else{
    //       console.log(this.veterinario);
    //       localStorage.setItem('veterinario', JSON.stringify(this.veterinario));
    //       this.router.navigate(['/mascotas/todas']);
    //     }
    //   }
    // );

      this.loginservice.authvet(this.veterinario).subscribe(
        (resp) => {
          localStorage.setItem('token', String(resp));
          this.router.navigate(['/mascotas/todas']);
        },(error) => {
          console.error('Error during login', error);
          this.errorMessage = 'Credenciales de inicio de sesión no válidas';
        }
    );

    

  }
}

