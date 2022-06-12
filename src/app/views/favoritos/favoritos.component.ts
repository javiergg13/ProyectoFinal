import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';
import { VerImgsComponent } from '../ver-imgs/ver-imgs.component';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  usuario!: Usuario;
  componentesFavoritos: any[] = [];
  pcsFavoritos: any[] = [];

  step = -1;
  cantidadPorPagina = 5
  opcionesDeCantidades =[5, 10, 25]


  constructor(private log: LoginService, private router: Router, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.getFavoritos();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  paginarComponentes(paginacion: any) {
    let actual = paginacion.pageIndex * paginacion.pageSize
    this.componentesFavoritos = this.usuario.componente_favoritos?.slice(
      actual,
      actual + paginacion.pageSize
    );
  }

  paginarPcs(paginacion: any) {
    let actual = paginacion.pageIndex * paginacion.pageSize
    this.pcsFavoritos = this.usuario.pc_favoritos?.slice(
      actual,
      actual + paginacion.pageSize
    );
  }

  getFavoritos(){
    this.log.getUsuario(localStorage.getItem('email')).subscribe(
      res => {
        this.usuario = res;
        this.componentesFavoritos = this.usuario.componente_favoritos?.slice(0, this.cantidadPorPagina)
        this.pcsFavoritos = this.usuario.pc_favoritos?.slice(0, this.cantidadPorPagina)
      },
      err => {
        console.log(err)
        this.log.logOut();
        this.router.navigate(['login'])
      }
    )
  }

  openDialogImgs(imgs: string[]) {
    this.dialog.open(VerImgsComponent, {
      data: {imgs: imgs},
      panelClass: 'background-white',
      width: '100%'
    })
  }

  deleteComponenteFavorito(componente: any){
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
  }

  deletePcFavorito(pc: any){
    let removedOption = this.usuario.pc_favoritos.findIndex(ordenador => ordenador._id === pc._id)
    this.usuario.pc_favoritos.splice(removedOption, 1);
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
