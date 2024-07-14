import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule, ProductosComponent,RouterLink,RouterLinkActive, CommonModule, ],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {
  productsService = inject(ProductsService);

 
 
  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos
  productIdToUpdate: string ="";
  isUpdating : boolean = true;
 
  nombre = "";
  imagen = "";
 precio:number = 0;
 modelo ="";


 

 obtenerDatos() {




  this.productsService.getProducts().subscribe((res: any) => {

    if (res) {
      console.log("res", res);
      this.allProducts = res;
    }
    else {
      console.log("hubo un error")
    }

  });

}
ngOnInit() {
  this.obtenerDatos();

}


 guardarProductoActualizar(producto:any){
  this.productIdToUpdate = producto._id;
  this.nombre = producto.nombre;
  this.imagen = producto.imagen;
  this.precio = producto.precio;
  this.modelo = producto.modelo;
  this.isUpdating = true;
}

actualizarProducto(){
  if(this.productIdToUpdate){

    this.productsService.putProduct(this.nombre, this.imagen,this.modelo, this.precio,this.productIdToUpdate).subscribe((req:any)=>{
      if(req){
        alert("Datos de producto actualizados exitosamente");
        this.isUpdating = true;
        this.nombre = "";
        this.imagen = "";
        this.precio = 0;
        this.modelo = "";
        this.productIdToUpdate = ""; 

        this.obtenerDatos();
      }else{
        console.error("Hubo un error al actualizar el producto");
        this.isUpdating=true;
      }
    })
  }else{
    console.error("Id del producto no encontrada en el sistema");
  }
}
 


}

