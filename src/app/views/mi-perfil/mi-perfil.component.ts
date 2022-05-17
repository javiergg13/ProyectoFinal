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


  constructor(private log: LoginService) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    console.log(this.log.getData('email'))
    this.log.getUsuario(this.log.getData('email')).subscribe(
      res => {
        console.log('res ', res)
        this.usuarios.push(res);
      },
      err => console.log(err)
    )
  }

}
