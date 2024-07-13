import { Injectable, inject } from '@angular/core';
// esto nos permite hacer peticiones al back o a un API
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  httpClient = inject(HttpClient);

  API_URL_GET = "http://localhost:3000/obtenerProductos";
  API_URL_POST = "http://localhost:3000/crearProducto";
  API_URL_PUT = "http://localhost:3000/actualizarProducto";
  API_URL_DELTE = "http://localhost:3000/borrarProducto";

  //OBTENER DATOS

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
