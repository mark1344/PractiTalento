import { ChildrenOutletContexts, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { Component } from '@angular/core';
import { LoginComponent } from './modulos/login/login.component';
import { RegistroColaboradoresComponent } from './modulos/registro-colaboradores/registro-colaboradores.component';

export const routes: Routes = [
    // configuracion de rutas donde inicialmente se carga el Dashboard
    {
        path:'',component: PrincipalComponent,
            children: [
                {path:'Dashboard',component:DashboardComponent},
                {path: '',redirectTo:'/Dashboard', pathMatch:'full'},
                {path:'registro',component:RegistroColaboradoresComponent}
            ]
   },{
    path:'login',component:LoginComponent
   }
];
