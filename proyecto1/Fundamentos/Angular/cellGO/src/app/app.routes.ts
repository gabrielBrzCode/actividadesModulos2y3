import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';



//1.IMPORTAR LAD QUE VAN A SER NUESTRAS PAGINAS DEL APLICATIVO
//2. DEFINIR EN QUE RUTA DEBE APARECER NUESTRA PAGINAS



export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "productos", component: ProductosComponent},
    {path: "", redirectTo: "/inicio", pathMatch: "full"},
    {path:"**", component: NoEncontradoComponent}
];
