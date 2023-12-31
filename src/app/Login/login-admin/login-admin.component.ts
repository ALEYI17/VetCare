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
  role!: string; //saber el rol de la persona autentificada

  ngOnInit(){
    // saber el rol del ususrio si tiene tiene token valdio enviarlo a su pagina
    
    this.loginservice.getRole().subscribe((res) => {
        
      this.role = res[0];
      console.log(this.role);

      if(this.role == "ADMINISTRADOR"){

        this.router.navigate([`/veterinarios/todos`]);

      }

      
    
  });

  }

  onSubmit(){
    console.log(this.admin);
// Llama al servicio de autenticación para verificar las credenciales del administrador

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
