import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
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
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MiPerfilComponent } from './views/mi-perfil/mi-perfil.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { ConfiguradorComponent } from './views/configurador/configurador.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ConfirmarInvitadoComponent } from './views/confirmar-invitado/confirmar-invitado.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { EditarUsuarioComponent } from './views/editar-usuario/editar-usuario.component';
import { FilterComponent } from './views/filter/filter.component';
import { FilterModalComponent } from './views/filter-modal/filter-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
    RegisterComponent,
    FavoritosComponent,
    ViewsComponent,
    PrincipalComponent,
    MiPerfilComponent,
    ConfiguradorComponent,
    InicioComponent,
    ConfirmarInvitadoComponent,
    EditarUsuarioComponent,
    FilterComponent,
    FilterModalComponent
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
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
    CommonModule,
    MatCheckboxModule,
    MatRadioModule
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
