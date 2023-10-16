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
  
  errorMessage: string | undefined;
  admin:admin = {usuario:'',contrasena:''};
  respuesta!:boolean
  onSubmit(){
    console.log(this.admin);

    this.loginservice.authAdmin(this.admin).subscribe(
      res=>{
        this.respuesta = res;
        if(!this.respuesta){
          this.errorMessage = 'Credenciales de inicio de sesión no válidas';
        }else{
          this.router.navigate(['/Veterinarios/todos']);
        }
      }
    )
    

  }

}
