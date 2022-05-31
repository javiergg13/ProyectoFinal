import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  public usuario!: Usuario;

  constructor(private log: LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this.log.getUsuario(this.log.getData('email')).subscribe(
      res => {
        this.usuario = res;
      },
      err => console.log(err)
    )
  }

  openDialog(nombre: string){
    this.dialog.open(EditarUsuarioComponent, {
      width: '300px',
      disableClose: true,
      data: {nombre: nombre, usuario: this.usuario}
    })
  }

}
