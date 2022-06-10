import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Componente, Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public usuario!: Usuario;
  filtro: string = '';

  listaComponentes: Componente[] = [];
  listaParaMostrar: any[] = [];

  cantidadPorPagina = 5
  opcionesDeCantidades = [5, 10, 25]


  constructor(private log: LoginService, public dialog: MatDialog,
    private rutaActiva: ActivatedRoute, private router: Router) {
    let isNavigation = '';
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        isNavigation = val.url.split('/')[2]
        this.loadData(isNavigation)
      }
    });
  }

  ngOnInit() {
  }

  loadData(isNavigation: any) {
    if (this.filtro != isNavigation && isNavigation != undefined) {
      this.getComponentes();
      this.getUsuario();
      this.filtro = isNavigation;
    }
  }

  paginar(paginacion: any) {
    let actual = paginacion.pageIndex * paginacion.pageSize
    this.listaParaMostrar = this.listaComponentes.slice(
      actual,
      actual + paginacion.pageSize
    );
  }

  getComponentes() {
    this.log.getComponentes().subscribe(
      res => {
        switch (this.filtro) {
          case 'cpu':
            this.listaComponentes = res.filter(componente => componente.tipo === 'cpu');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'gpu':
            this.listaComponentes = res.filter(componente => componente.tipo === 'gpu');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'psu':
            this.listaComponentes = res.filter(componente => componente.tipo === 'psu');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'almacenamiento':
            this.listaComponentes = res.filter(componente => componente.tipo === 'almacenamiento');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'torre':
            this.listaComponentes = res.filter(componente => componente.tipo === 'torre');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'ventilacion':
            this.listaComponentes = res.filter(componente => componente.tipo === 'ventilacion');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'ram':
            this.listaComponentes = res.filter(componente => componente.tipo === 'ram');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'placa_base':
            this.listaComponentes = res.filter(componente => componente.tipo === 'placa base');
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          case 'todo':
            this.listaComponentes = res;
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
            break;
          default:
            this.listaComponentes = res;
            this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  getUsuario() {
    this.log.getUsuario(localStorage.getItem('email')).subscribe(
      res => {
        this.usuario = res
      },
      err => {
        console.log(err)
      }
    )
  }

  addFavorito(componente: any) {
    if (this.usuario.componente_favoritos.find((c: any) => componente._id === c._id)) {
      let removedOption = this.usuario.componente_favoritos.findIndex(component => component._id === componente._id)
      this.usuario.componente_favoritos.splice(removedOption, 1);
      this.log.editUsuario(this.usuario).subscribe(
        res => {
          console.log('todo bien')
        },
        err => {
          console.log('algo salió mal')
        }
      )
    } else {
      this.usuario.componente_favoritos.push(componente)
      this.log.editUsuario(this.usuario).subscribe(
        res => {
          console.log('todo bien')
        },
        err => {
          console.log('algo salió mal')
        }
      )
    }
  }

  isFavorito(componente: any): boolean {
    if (this.usuario.componente_favoritos.find((c: any) => componente._id === c._id)) {
      return true;
    } else {
      return false;
    }
  }
}
