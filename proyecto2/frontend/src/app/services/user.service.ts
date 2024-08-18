import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // inyección de dependencias
  private httpClient = inject(HttpClient);
  private URL_USERS = 'http://localhost:3000/users';

  // peticiones get, post, delete

  // OBTENER USURARIOS
  getUsers(options:any){
    return this.httpClient.get(this.URL_USERS, options);
  }

  // CREAR USUARIO
  postUser(user:User){
    return this.httpClient.post(this.URL_USERS,user);
  }

  // ACTUALIZAR USUARIO
  putUser(userUpdated:User, id:string){
    return this.httpClient.put(`${this.URL_USERS}/${id}`, userUpdated);
  }

  // ELIMINAR USUARIO
  deleteUser(id:string, token:any){
    return this.httpClient.delete(`${this.URL_USERS}/${id}`,token);
  }

}