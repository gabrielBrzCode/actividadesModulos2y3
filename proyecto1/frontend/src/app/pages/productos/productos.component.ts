import { Component, inject } from '@angular/core';
// este es nuestro servicio para hacer las peticiones a nuestro back
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CargandoComponent } from '../../components/cargando/cargando.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, CargandoComponent,CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productService = inject(ProductsService);

  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos

  loading: boolean = false; // Variable para mostrar el estado de carga



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

}
