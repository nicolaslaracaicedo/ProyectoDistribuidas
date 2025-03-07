import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IngresoDatosComponent } from '../app/ingreso-datos/ingreso-datos.component'
import { MostrarDatosComponent } from '../app/mostrar-datos/mostrar-datos.component'


export const routes: Routes = [
    { path: 'ingresar', component: IngresoDatosComponent }, 
    { path: 'mostrar', component: MostrarDatosComponent }, 
    { path: '', redirectTo: '/mostrar', pathMatch: 'full' }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})

export class AppRoutingModule { }