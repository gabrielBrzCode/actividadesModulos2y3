import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from '../productos/productos.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [FormsModule, ProductosComponent,RouterLink,RouterLinkActive],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {


}
