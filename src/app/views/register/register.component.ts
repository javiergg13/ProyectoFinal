import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmedValidator } from '../../shared/services/confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public hide: boolean = true;
  public usuario: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(new RegExp(/[a-z0-9_-]+@[a-z0-9.-]+\.[a-z]{2,4}/))]],
      cp: ['', [Validators.required, Validators.pattern(new RegExp(/(\d){5}/))]],
      edad: ['', [Validators.required, Validators.pattern(new RegExp(/(\d){1,2}/))]],
      telefono: ['', [Validators.required, Validators.pattern(new RegExp(/(\d){9}/))]],
      contraseñaConfirmacion: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]]
    }, {
        validator: ConfirmedValidator('contraseña', 'contraseñaConfirmacion')}
    );
  }
  ngOnInit(): void {
  }

}
