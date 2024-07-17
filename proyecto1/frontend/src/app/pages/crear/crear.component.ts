import { Component, inject,} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductosComponent } from '../../pages/productos/productos.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';


@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductosComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent  {

  router = inject(Router);
  productsService = inject(ProductsService);
  isAdding : boolean = true;
 nombre = "";
  imagen = "";
 precio:number = 0;
 modelo ="";





  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos

  crearProducto(){
 
      this.isAdding = false;
  
      this.productsService.postProduct(this.nombre,this.imagen,this.modelo,this.precio).subscribe((req:any)=>{
        if(req){
          alert("Producto creado con exito");
          this.isAdding = true;
          this.nombre = "";
          this.imagen = "";
          this.precio = 0;
          this.modelo ="";
          this.crearProducto();
          this.router.navigate(['/admin']);
        }else{
          console.error("Error de creacion");
          this.isAdding=false;
        }
      })
    }
  
  }


