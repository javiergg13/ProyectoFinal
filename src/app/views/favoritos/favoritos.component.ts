import {Component, OnInit} from '@angular/core';
import {Componente, Pc, Usuario} from 'src/app/shared/interfaces/modelos';
import {LoginService} from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario!: Usuario;
  componentesFavoritos: any[] | undefined = [];

  cantidadPorPagina = 5
  opcionesDeCantidades =[5, 10, 25]


  constructor(private log: LoginService){
  }

  ngOnInit(): void {
    this.getComponentesFavoritos();
  }

  paginar(paginacion: any) {
    let actual = paginacion.pageIndex * paginacion.pageSize
    this.componentesFavoritos = this.usuario.componente_favoritos?.slice(
      actual,
      actual + paginacion.pageSize
    );
  }

  getComponentesFavoritos(){
    this.log.getUsuario(localStorage.getItem('email')).subscribe(
      res => {
        this.usuario = res;
        this.componentesFavoritos = this.usuario.componente_favoritos?.slice(0, this.cantidadPorPagina)
      },
      err => {
        console.log(err)
      }
    )
  }
}
