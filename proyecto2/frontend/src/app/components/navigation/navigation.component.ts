import { Component, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LoginComponent, RegisterComponent,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
//1. inyeccion de dependencias
//2. delcaracion de variables
//3. metodos

loginService = inject(LoginService);






isVisibleLogin: boolean = false;
isVisibleRegister: boolean = false;


toggleLogin(){
this.isVisibleLogin = !this.isVisibleLogin;
this.isVisibleRegister= false;
}



toggleRegister(){
this.isVisibleRegister = !this.isVisibleRegister;
this.isVisibleLogin = false;
}

closeSesion(){
  this.loginService.logout();
}




}
