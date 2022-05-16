import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RegisterComponent } from './views/register/register.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { ViewsComponent } from './views/views.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PrincipalComponent } from './views/principal/principal.component';
import { CarouselComponent } from './views/carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { FilterCBComponent } from './views/filter-cb/filter-cb.component';
import { FilterRangeComponent } from './views/filter-range/filter-range.component';
import { CuerpoComponent } from './views/cuerpo/cuerpo.component';
import { MiPerfilComponent } from './views/mi-perfil/mi-perfil.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { ConfiguradorComponent } from './views/configurador/configurador.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ConfirmarInvitadoComponent } from './views/confirmar-invitado/confirmar-invitado.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    LoginComponent,
    RegisterComponent,
    FavoritosComponent,
    ViewsComponent,
    PrincipalComponent,
    CarouselComponent,
    FilterCBComponent,
    FilterRangeComponent,
    CuerpoComponent,
    MiPerfilComponent,
    ConfiguradorComponent,
    InicioComponent,
    ConfirmarInvitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    IvyCarouselModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
