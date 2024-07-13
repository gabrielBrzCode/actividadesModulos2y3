import { Component, inject } from '@angular/core';
// este es nuestro servicio para hacer las peticiones a nuestro back
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productService = inject(ProductsService);

  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos



  obtenerDatos() {
    this.productService.getProducts().subscribe((res: any) => {

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

}
