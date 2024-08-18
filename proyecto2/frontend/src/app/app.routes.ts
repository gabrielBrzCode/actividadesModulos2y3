import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Inicio | Proyecto 2'},
    {   
        path: 'private', 
        component: AdminComponent, 
        title: 'Panel Administracion | Proyecto 2',
        // guardian para hacer la ruta privada
        canActivate: [authGuard]
    }
];