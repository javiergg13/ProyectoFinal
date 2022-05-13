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
  public usuario!: FormGroup

  constructor(private formBuilder: FormBuilder, private log: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.formBuilder.group({
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
    console.log(this.usuario)
    if(this.usuario.valid) {
      const body: Usuario = {
        nombre: this.usuario.value.nombre,
        apellidos: this.usuario.value.apellidos,
        password: this.usuario.value.contraseña,
        email: this.usuario.value.email,
        cp: this.usuario.value.cp,
        telefono: this.usuario.value.telefono,
        id: "4"
      }
      this.log.register(body).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['miPerfil']);
        },
        error: () => {
          alert("Error al registrarte")
          this.usuario.reset();
        }
      })
    }
  }
}
