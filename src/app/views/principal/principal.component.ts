import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Componente, IFilterObject, Pc, Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public panelOpenState = false;

  public usuario!: Usuario;

  public filtrosAplicados = 0;

  public filterObject: IFilterObject = {
    filterByText: '',
    filterByStatus: null
  };

  tiposComponentes: string[] = ['Placas base', 'Procesadores', 'Almacenamiento', 'Tarjetas gráficas', 'Memorias RAM', 'Torres', 'Ventilación', 'Fuentes de alimentación'];
  marcas: string[] = [];
  listaPcs: Pc[] = [];

  listaComponentes: Componente[] = [];
  listaParaMostrar: any[] = [];

  cantidadPorPagina = 5
  opcionesDeCantidades =[5, 10, 25]


  constructor(private log: LoginService, public dialog: MatDialog){
  }

  ngOnInit(): void {
    this.getComponentes();
    this.getUsuario();
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
        this.recogerMarcas(this.listaComponentes)
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
      }
    )
  }

  recogerMarcas(lista: any[]){
    for(let elemento of lista){
      if(!this.marcas.includes(elemento.marca)){
        this.marcas.push(elemento.marca)
      }
    }
  }

  public openFilterModal(): void {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      data: { ...this.filterObject },
      panelClass: 'full-width-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.filterObject = result;
      this.setCounterNumber();
    });
  }

  eventHandler(event: IFilterObject) {
    this.filterObject = event;
    this.setCounterNumber();
  }

  setCounterNumber() {
    this.filtrosAplicados = 0;

    this.filtrosAplicados = this.filterObject.filterByText !== '' ?
      this.filtrosAplicados + 1 : this.filtrosAplicados;

    this.filtrosAplicados = this.filterObject.filterByStatus !== null ? this.filtrosAplicados + 1 : this.filtrosAplicados;
  }

  addFavorito(componente: Componente){
    if(this.usuario.componente_favoritos?.includes(componente)){
      let remocedOption = this.usuario.componente_favoritos.findIndex(component => component.modelo === componente.modelo)
      this.usuario.componente_favoritos.splice(remocedOption, 1);
      this.log.editUsuario(this.usuario);
    } else {
      this.usuario.componente_favoritos?.push(componente)
      this.log.editUsuario(this.usuario);
    }
  }

  isFavorito(componente: Componente): boolean {
    if(this.usuario.componente_favoritos?.includes(componente)){
      return true;
    } else {
      return false;
    }
  }
}
