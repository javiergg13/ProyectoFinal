import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';

import { ConfirmedValidator } from '../../shared/services/confirmed.validator';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  public hide: boolean = true;
  public formPassword!: FormGroup
  public formEmail!: FormGroup
  public formCp!: FormGroup
  public formTel!: FormGroup

  constructor(private formBuilder: FormBuilder, private log: LoginService,
    @Inject(MAT_DIALOG_DATA) public data:
  {nombre: string, usuario: Usuario}, public dialog: MatDialog,
  private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.formPassword = this.formBuilder.group({
      contraseña: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]],
      contraseñaConfirmacion: ['']
    }, {
      validator: ConfirmedValidator('contraseña', 'contraseñaConfirmacion'),
    });
    this.formEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(new RegExp(/[a-z0-9_-]+@[a-z0-9.-]+\.^[a-z]{2,4}$/))]]
    })
    this.formCp = this.formBuilder.group({
      cp: ['', [Validators.required, Validators.pattern(new RegExp(/^(\d){5}$/))]]
    })
    this.formTel = this.formBuilder.group({
      tel: ['', [Validators.required, Validators.pattern(new RegExp(/^(\d){9}$/))]]
    })
  }

  aplicar() {
    if(this.data.nombre === 'password' && this.formPassword.valid){
        this.data.usuario.password = this.formPassword.value.contraseña;
        this.log.editUsuario(this.data.usuario).subscribe(
          res => {
            console.log('todo bien')
          },
          err => {
            console.log('algo salió mal')
          }
        )
    }

    if(this.data.nombre === 'email' && this.formEmail.valid){
        this.data.usuario.email = this.formEmail.value.email;
        this.log.editUsuario(this.data.usuario).subscribe(
          res => {
            console.log('todo bien')
          },
          err => {
            console.log('algo salió mal')
          }
        )
    }

    if(this.data.nombre === 'código postal' && this.formCp.valid){
        this.data.usuario.cp = this.formCp.value.cp;
        this.log.editUsuario(this.data.usuario).subscribe(
          res => {
            console.log('todo bien')
          },
          err => {
            console.log('algo salió mal')
          }
        )
    }

    if(this.data.nombre === 'número de telefono' && this.formTel.valid){
        this.data.usuario.telefono = this.formTel.value.tel;
        this.log.editUsuario(this.data.usuario).subscribe(
          res => {
            console.log('todo bien')
          },
          err => {
            console.log('algo salió mal')
          }
        )
      }
  }

}
