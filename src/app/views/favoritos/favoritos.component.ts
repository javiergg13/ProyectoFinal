import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Componente} from 'src/app/shared/interfaces/modelos';
import {LoginService} from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  dataSource!: MatTableDataSource<Componente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private log: LoginService) {
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.log.getComponentes().subscribe({
      next: (res) => {
        console.log("Te has registrado correctamente");
        const resArray: Componente[] = [];
        resArray[0] = res;
        this.dataSource = new MatTableDataSource(resArray)
        console.log(res)
      },
      error: () => {
        console.log("Error al registrarte")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
