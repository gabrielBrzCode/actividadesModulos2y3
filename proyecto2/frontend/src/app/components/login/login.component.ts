import { Component,inject } from '@angular/core';
import { Input } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from "@angular/forms"
import { Credentials } from '../../interfaces/credentials';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginService = inject(LoginService);


@Input() toggleRegister: () => void = () => {};
//recibir algo / nombre a lo que entra : el tipo () => void no retorna nada = indicaciones

credentialForm = new FormGroup({

  email : new FormControl(""),
  password : new FormControl("")
});


//NOS PERMITE OBTENER LAS CREDENCIALES PARA DESPUES INICIAR SESION

getCredentials(){
  const email = this.credentialForm.value.email;
  const password = this.credentialForm.value.password;


// validar que las credenciales son del tipo de dato que recobe la interfaz
if(typeof email === "string" && typeof password === "string"){

  const validarCredenciales: Credentials ={
    email,
    password
  }
// retorno los datos de la interdaz
return validarCredenciales
}
return null;
}
// Metodo para controlar el submit
handleSubmit(){

 const credenciales = this.getCredentials();
 console.log(credenciales);

 //validar que si se hayn dado  las credenciales

 if(credenciales){
this.loginService.login(credenciales).subscribe({
  // manejar errores en front
  next: (res:any) => {
console.log(res);

  },
  error: (err)=>{
console.log(err);
  }
})
 }
}


 


}
