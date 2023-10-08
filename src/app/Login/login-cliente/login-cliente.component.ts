import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {

  constructor(private loginservice: LoginServiceService,private router: Router){}
  
  cliente: Cliente = {cedula :'',nombre:'',corre:'',celular:'',id:0,misMascotas:undefined}; // Define your client object here
  errorMessage: string | null = null; // Use string or null for errorMessage
  respuesta!: Cliente

  onSubmit() {

    console.log(this.cliente);
    
    this.loginservice.authcliente(this.cliente).subscribe(resp => {
          
      this.respuesta=resp

      if(this.respuesta.cedula == "invalid"){
        this.errorMessage = 'Credenciales de inicio de sesión no válidas';
      }else{
        console.log(`/cliente/${this.respuesta.cedula}`);
        this.router.navigate([`/cliente/${this.respuesta.cedula}`]);
        
      }
  
    })


  }

}
