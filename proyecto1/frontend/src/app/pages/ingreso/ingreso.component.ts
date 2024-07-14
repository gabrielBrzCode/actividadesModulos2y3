// injeccion de directivas de Angular, formularios.
import { Component, inject } from '@angular/core';

//Esto nos permite interactuar con los formularios
import { FormsModule } from '@angular/forms';
// Esto nos permite hacer la redireccion a otra pagina
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  // Aqui vamos a injectar nuestra directiva del router
  router = inject(Router);

  //vamos a dar unos datos para validar administracion
  admin = {
    correo: "admin@gmail.com",
    contrasenia: "123"

  };

  correo: string = "";
  contrasenia: string = "";
  // Despues de esto viene la logica para redireccionar a la otra pagina

  iniciarSesion() {
    if (this.correo === this.admin.correo && this.contrasenia === this.admin.contrasenia) {
      alert('Bienvenido Administrador!');
      this.router.navigate(['/admin']);
    } else {
      alert('correo o contraseña incorrectos');
    }
  }


}


