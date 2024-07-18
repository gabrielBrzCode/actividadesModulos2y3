import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LoginComponent, RegisterComponent,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

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






}
