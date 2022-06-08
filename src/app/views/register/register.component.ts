import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';

import { ConfirmedValidator } from '../../shared/services/confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public hide: boolean = true;
  public formUsuario!: FormGroup
  public mostrarError: boolean = false;

  constructor(private formBuilder: FormBuilder, private log: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(new RegExp(/[a-z0-9_-]+@[a-z0-9.-]+\.[a-z]{2,4}/))]],
      cp: ['', [Validators.required, Validators.pattern(new RegExp(/(\d){5}/))]],
      telefono: ['', [Validators.required, Validators.pattern(new RegExp(/(\d){9}/))]],
      contraseñaConfirmacion: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]]
    }, {
        validator: ConfirmedValidator('contraseña', 'contraseñaConfirmacion')}
    );
  }

  register() {
    if(this.formUsuario.valid) {
      const body: Usuario = {
        nombre: this.formUsuario.value.nombre,
        apellidos: this.formUsuario.value.apellidos,
        password: this.formUsuario.value.contraseña,
        email: this.formUsuario.value.email,
        cp: this.formUsuario.value.cp,
        telefono: this.formUsuario.value.telefono,
        componente_favoritos: [],
        pc_favoritos: []
      }
      this.log.register(body).subscribe({
        next: (res) => {
          console.log(res)
          if(res.succes != undefined){
            this.mostrarError = true;
          } else{
            this.mostrarError = false;
            localStorage.setItem('token', res.token);
            localStorage.setItem('email', body.email);
            this.router.navigate(['miPerfil']); 
          }   
        },
        error: () => {
          this.mostrarError = false;
          alert("Error al registrarte")
          this.formUsuario.reset();
        }
      })
    }
  }
}
