import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/Entities/admin';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private loginservice: LoginServiceService,private router: Router){}
    // Propiedad para almacenar mensajes de error
  errorMessage: string | undefined;
   // Objeto para almacenar las credenciales del administrador
  admin:admin = {usuario:'',contrasena:''};
   // Propiedad para almacenar la respuesta de la autenticación
  respuesta!:boolean
  onSubmit(){
    console.log(this.admin);
// Llama al servicio de autenticación para verificar las credenciales del administrador
    // this.loginservice.authAdmin(this.admin).subscribe(
    //   res=>{
    //     this.respuesta = res;
    //     if(!this.respuesta){
    //       this.errorMessage = 'Credenciales de inicio de sesión no válidas';
    //     }else{
    //       this.router.navigate(['/veterinarios/todos']);
    //     }
    //   }
    // )

      this.loginservice.authAdmin(this.admin).subscribe(
      res=>{
        localStorage.setItem('token', String(res));
        this.router.navigate([`veterinarios/todos`]);
      },(error) => {
        console.error('Error during login', error);
        this.errorMessage = 'Credenciales de inicio de sesión no válidas';
      }
    )
    

  }

}
