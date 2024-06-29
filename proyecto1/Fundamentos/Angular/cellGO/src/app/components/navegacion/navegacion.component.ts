import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';




@Component({
  //ESTO DE ACA SE USA EN HTML para poder usar el componente
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})//esta clase es la que debo IMPORTAR
export class NavegacionComponent {

}
