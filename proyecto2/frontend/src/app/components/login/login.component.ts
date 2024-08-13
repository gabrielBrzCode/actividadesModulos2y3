import { Component, } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
@Input() toggleRegister: () => void = () => {};
//recibir algo / nombre a lo que entra : el tipo () => void no retorna nada = indicaciones


}
