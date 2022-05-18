import { Component, OnInit } from '@angular/core';
import { Usuario } from 'ProyectoFinal/src/app/shared/classes/usuario';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  usuarios:any = [];
  usuario:any = [];
  componentes: any = [];


  constructor(private log: LoginService) { }

  ngOnInit(): void {
    this.getUsuario();
    this.getComponentes();
    this.getUsuarios();
    console.log(this.componentes)
  }

  getUsuario() {
    this.log.getUsuario(this.log.getData('email')).subscribe(
      res => {
        this.usuario.push(res);
      },
      err => console.log(err)
    )
  }

  getComponentes() {
    this.log.getComponentes().subscribe(
      res => {
    console.log(res)
        this.componentes = res;
      },
      err => console.log(err)
    )
  }

  getUsuarios() {
    this.log.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    )
  }

}
