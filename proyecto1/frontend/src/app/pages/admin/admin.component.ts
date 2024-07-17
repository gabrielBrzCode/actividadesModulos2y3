import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { CargandoComponent } from '../../components/cargando/cargando.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ProductosComponent,RouterLink,RouterLinkActive, CommonModule, CargandoComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productService = inject(ProductsService);

  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos
  productIdToUpdate: string ="";
  isUpdating : boolean = false;
  nombre = "";
  imagen = "";
 precio:number = 0;
 modelo ="";
 loading: boolean = false; // Variable para mostrar el estado de carga

 constructor(private router: Router,private dialog: MatDialog) {}

  actualizarProducto(id: string) {
    this.router.navigate(['/actualizar', id]);
  }









  obtenerDatos() {
    this.loading = true; // Mostrar estado de carga
    
    this.productService.getProducts().subscribe((res: any) => {

      if (res) {
        console.log("res", res);
        this.allProducts = res;
        setTimeout(() => {
          this.loading = false; // Desactiva el loading después de un tiempo
        }, 1200); // Simulación de tiempo de carga prolongado (3 segundos)
      }
      else {
        console.log("hubo un error")
        this.loading = false;
      }

    });


  }
  ngOnInit() {
    this.obtenerDatos();

  }
  eliminarProducto(id:string){
    if(id){
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
      this.productService.deleteProduct(id).subscribe((req:any)=>{
        if(req){
          alert("Producto eliminado satisfactoriamente");
          // Actualizar la tabla
          this.obtenerDatos();
        }else{
          console.error("Hubo un error al eliminar el producto");
        }
      })
    }else{
      console.error("ID del producto no encontrada en el sistema");
    }
  }


  
)}}}

