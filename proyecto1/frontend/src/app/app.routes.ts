import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';


//1. Importacion de mis paginas para poder crearles una ruta


//2. Creacion de la ruta 

const routes: Routes = [
{path: "inicio", component: InicioComponent, title:"Performance sellers"},
{path: "productos", component: ProductosComponent, title:"productos"},
{path:"ingresar", component: IngresoComponent, title:"ingreso"},
{path:"admin", component:AdminComponent, title:"administrador"},
{path: "", redirectTo: "/inicio", pathMatch: "full"},
 {path: "crear", component: CrearComponent, title:"crear Producto"},
    {path: "eliminar", component: EliminarComponent},
    {path: "actualizar/:id", component: ActualizarComponent},
    {path:"**", component: NoEncontradoComponent}
];export default routes;

