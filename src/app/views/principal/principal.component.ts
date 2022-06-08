import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Componente, IFilterObject, Pc, Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public usuario!: Usuario;

  listaComponentes: Componente[] = [];
  listaParaMostrar: any[] = [];

  cantidadPorPagina = 5
  opcionesDeCantidades =[5, 10, 25]


  constructor(private log: LoginService, public dialog: MatDialog, private router: Router){
  }

  async ngOnInit() {
    this.getComponentes();
     await this.getUsuario();
  }

  paginar(paginacion: any) {
    let actual = paginacion.pageIndex * paginacion.pageSize
    this.listaParaMostrar = this.listaComponentes.slice(
      actual,
      actual + paginacion.pageSize
    );
  }

  getComponentes(){
    this.log.getComponentes().subscribe(
      res => {
        this.listaComponentes = res;
        this.listaParaMostrar = this.listaComponentes.slice(0, this.cantidadPorPagina)
      },
      err => {
        console.log(err)
      }
    )
  }

  getUsuario(){
    this.log.getUsuario(localStorage.getItem('email')).subscribe(
      res => {
        this.usuario = res
      },
      err => {
        console.log(err)
        this.log.logOut();
        this.router.navigate(['login'])
      }
    )
  }

  addFavorito(componente: any){
    if(this.usuario.componente_favoritos.find((c:any) => componente._id === c._id)){
      let remocedOption = this.usuario.componente_favoritos.findIndex(component => component.modelo === componente.modelo)
      this.usuario.componente_favoritos.splice(remocedOption, 1);
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
    console.log(this.usuario.componente_favoritos)
    if(this.usuario.componente_favoritos.find((c:any) => componente._id === c._id)){
      return true;
    } else {
      return false;
    }
  }
}
