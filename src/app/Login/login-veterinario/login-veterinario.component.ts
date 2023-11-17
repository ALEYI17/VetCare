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
  //saber el rol de la persona autentificada
  role!: string; 

  ngOnInit(){

    // saber el rol del ususrio si tiene tiene token valdio enviarlo a su pagina
    this.loginservice.getRole().subscribe((res) => {
        
      this.role = res[0];
      console.log(this.role);

      if(this.role == "VETERINARIO"){

        this.router.navigate([`/mascotas/todas`]);

      }
      if(this.role == "CLIENTE"){
        this.router.navigate([`cliente/home`]);
      }
      
    
  });

  }

  onSubmit() {

    console.log(this.veterinario);
    // Llama al servicio de autenticación para verificar las credenciales del veterinario


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

