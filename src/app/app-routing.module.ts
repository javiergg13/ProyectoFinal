import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';

import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { MiPerfilComponent } from './views/mi-perfil/mi-perfil.component';
import { AuthGuard } from './auth.guard';


const  routes:  Routes  = [
  { path: 'nosotros', component: AcercaDeNosotrosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'favoritos', component: FavoritosComponent, canActivate: [AuthGuard]},
  { path: 'principal', component: PrincipalComponent},
  { path: 'miPerfil', component: MiPerfilComponent, canActivate: [AuthGuard]},

  { path: '', redirectTo: '/novedades', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }
