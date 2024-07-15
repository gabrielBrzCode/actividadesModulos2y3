import { Injectable, inject } from '@angular/core';
import { Producto } from '../interfaces/product';
import { Observable } from 'rxjs';


// esto nos permite hacer peticiones al back o a un API
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }
  httpClient = inject(HttpClient);
  private API_URL = 'http://localhost:3000'; // Base URL del API
  API_URL_GET = "http://localhost:3000/obtenerProductos";
  API_URL_POST = "http://localhost:3000/crearProducto";
  API_URL_PUT = "http://localhost:3000/actualizarProducto";
  API_URL_DELTE = "http://localhost:3000/borrarProducto";

  //OBTENER DATOS
 

  getProductById(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.API_URL}/productos/${id}`);
  }


  
  updateProduct(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.API_URL_PUT}/${id}`, producto);
  }
  getProducts() {
    // hago la pericion get
    return this.httpClient.get(this.API_URL_GET);

  }
  postProduct(nombre: string, imagen: string, modelo: string, precio: number) {
    // la informacion la guardara en la siguiente variable infoProducto
    const infoProducto = {
      nombre:nombre , imagen: imagen, precio: precio, modelo:modelo
    }

    return this.httpClient.post(this.API_URL_POST, infoProducto)
  }
  //MODIFICAR DATOS

  putProduct(nombre: string, imagen: string, modelo: string, precio: number, id:string) {

    const infoProducto = {
      nombre: nombre, imagen: imagen, precio: precio, modelo:modelo
    }
    return this.httpClient.put(`${this.API_URL_PUT}/${id}`, infoProducto);

  }

// ELIMINAR PRODUCTOS

deleteProduct(id:string){

  return this.httpClient.delete(`${this.API_URL_DELTE}/${id}`);
}



}
