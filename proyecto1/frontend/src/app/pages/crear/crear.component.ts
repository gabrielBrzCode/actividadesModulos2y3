import { Component, inject, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductosComponent, ReactiveFormsModule ],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent  {

  
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

  form: FormGroup;

  constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    nombre:["", Validators.required],
    modelo:["", Validators.required],
    precio:[null, Validators.required],
    imagen:["", Validators.required]
    
  })
 
}

  crearProducto(){
 
      this.isAdding = true;
  
      this.productsService.postProduct(this.nombre,this.imagen,this.modelo,this.precio).subscribe((req:any)=>{
        if(req){
          alert("Producto creado con exito");
          this.isAdding = false;
          this.nombre = "";
          this.imagen = "";
          this.precio = 0;
          this.modelo ="";
          this.crearProducto();
        }else{
          console.error("Error de creacion");
          this.isAdding=false;
        }
      })
    }
  
  }


