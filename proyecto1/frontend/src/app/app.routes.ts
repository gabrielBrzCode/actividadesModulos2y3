import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';


//1. Importacion de mis paginas para poder crearles una ruta


//2. Creacion de la ruta 

const routes: Routes = [
    { path: "inicio", component: InicioComponent, title: "Performance sellers" },
    { path: "productos", component: ProductosComponent, title: "Productos" },
    { path: "ingresar", component: IngresoComponent, title: "Ingreso" },
    { path: "admin", component: AdminComponent, title: "Administrador" },
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: "crear", component: CrearComponent, title: "Crear Producto" },
    { path: "actualizar/:id", component: ActualizarComponent, title: "Actualizar producto" },
    { path: "**", component: NoEncontradoComponent, title: "404" }
]; export default routes;

