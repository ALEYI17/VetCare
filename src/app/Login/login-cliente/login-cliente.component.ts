import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entities/cliente';
import { User } from 'src/app/Entities/user';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {

  constructor(private loginservice: LoginServiceService,private router: Router){}
  
  
  cliente: User = {cedula :'',contrasena:''}; // Define your client object here
  errorMessage: string | null = null; // Use string or null for errorMessage
  role!: string; //saber el rol de la persona autentificada

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

    console.log(this.cliente);


     // Llama al servicio de autenticación para verificar las credenciales del cliente
    this.loginservice.authcliente(this.cliente).subscribe(
      (resp) => {
        console.log('entre aqui')
        localStorage.setItem('token', String(resp));
        this.router.navigate([`/cliente/home`]);
      },(error) => {
        console.error('Error during login', error);
        this.errorMessage = 'Credenciales de inicio de sesión no válidas';
      }


    );


  }

}
