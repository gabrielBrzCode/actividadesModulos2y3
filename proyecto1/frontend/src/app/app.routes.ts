import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';

//1. Importacion de mis paginas para poder crearles una ruta


//2. Creacion de la ruta 

export const routes: Routes = [
{path: "inicio", component: InicioComponent},
{path: "productos", component: ProductosComponent},
{path:"ingresar", component: IngresoComponent},
{path:"admin", component:AdminComponent},
{path: "", redirectTo: "/inicio", pathMatch: "full"},
    {path:"**", component: NoEncontradoComponent}

];
