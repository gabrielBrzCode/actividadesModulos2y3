import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from '../../interfaces/product';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [FormsModule, ProductosComponent, CommonModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit {
  productsService = inject(ProductsService);

  producto: Producto = {
    _id: '',
    nombre: '',
    modelo: '',
    imagen: '',
    precio: 0
  }; // Objeto para almacenar los datos del producto a actualizar




  // la siguiente variable recibe cualquier dato y lo guarda en un arreglo
  allProducts: any[] = [];
  // aca obtenemos la informacion al hacer la peticion GET
  // aca obtenemos nuestros productos


  productIdToUpdate: string = "";
  isUpdating: boolean = false;

  nombre: string = "";
  imagen: string = "";
  precio: number = 0;
  modelo: string = "";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router // Agregar el Router aquí
  ) { }

  ngOnInit() {
       // Obtener el ID del producto de la ruta o del servicio compartido
       this.route.params.subscribe(params => {
        const productId = params['id'];
        if (productId) {
          this.cargarProducto(productId); // Cargar los datos del producto si hay un ID en la ruta
        }
      });
    this.obtenerDatos();

}
cargarProducto(id: string) {
  this.productService.getProductById(id).subscribe({
    next: (producto: Producto) => { // Aquí especificamos que producto es de tipo Producto
      this.producto = producto; // Asignar el producto recibido a la propiedad local
      // Asignar los datos del producto a los campos del formulario
      this.nombre = producto.nombre;
      this.imagen = producto.imagen;
      this.precio = producto.precio;
      this.modelo = producto.modelo;
      this.productIdToUpdate = producto._id;
      this.isUpdating = true; // Marcar como actualización activa si es necesario
    },
    error: (error) => {
      console.error("Error al obtener el producto:", error);
    }
  });
}


  
  obtenerDatos() {
    this.productService.getProducts().subscribe((res: any) => {
      if (res) {
        console.log("res", res);
        this.allProducts = res;
      } else {
        console.log("Hubo un error al obtener los productos");
      }
    });
  }


  actualizarProducto() {
    if (this.productIdToUpdate) {
      const updatedProduct = {
        _id: this.productIdToUpdate,
        nombre: this.producto.nombre,
        imagen: this.producto.imagen,
        precio: this.producto.precio,
      modelo: this.producto.modelo
      };

      this.productService.updateProduct(this.productIdToUpdate, updatedProduct).subscribe({
        next: (res: any) => {
          console.log("Producto actualizado correctamente:", res);
          this.snackBar.open('Producto actualizado exitosamente', 'Cerrar', { duration: 3000 });
          this.isUpdating = false;
          this.resetearCampos();
          this.obtenerDatos(); // Actualiza la lista de productos

             // Redirigir a la página de administración después de 3 segundos (opcional)
        setTimeout(() => {
          this.router.navigate(['/admin']); // Navegar a la página de administración
        }, 3000); // Esperar 3 segundos antes de redirigir
        },
        
        error: (error) => {
          console.error("Hubo un error al actualizar el producto", error);
          this.snackBar.open('Error al actualizar el producto', 'Cerrar', { duration: 3000 });
        }
      });
    } else {
      console.error("ID del producto no encontrada en el sistema");
    }
  }





  resetearCampos() {
    this.nombre = "";
    this.imagen = "";
    this.precio = 0;
    this.modelo = "";
    this.productIdToUpdate = "";
  
  };

  
  guardarProductoActualizar(producto: any) {
    this.productIdToUpdate = producto._id;
    this.nombre = producto.nombre;
    this.imagen = producto.imagen;
    this.precio = producto.precio;
    this.modelo = producto.modelo;
    this.isUpdating = true;
     
  };
}