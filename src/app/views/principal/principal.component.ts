import { Component, OnInit } from '@angular/core';
import { Componente, Pc } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public panelOpenState = false;

  tiposComponentes: string[] = ['Placas base', 'Procesadores', 'Almacenamiento', 'Tarjetas gráficas', 'Memorias RAM', 'Torres', 'Ventilación', 'Fuentes de alimentación'];
  marcas: string[] = [];
  listaPcs: Pc[] = [];

  listaComponentes: Componente[] = [];
  listaParaMostrar: any[] = [];

  cantidadPorPagina = 5
  opcionesDeCantidades =[5, 10, 25]


  constructor(private log: LoginService){
  }

  ngOnInit(): void {
    this.getComponentes();
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

  recogerMarcas(lista: any[]){
    for(let elemento of lista){
      if(!this.marcas.includes(elemento.marca)){
        this.marcas.push(elemento.marca)
      }
    }
  }

}
