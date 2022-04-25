import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public usuario: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]]
    });
  }

  ngOnInit(): void {
  }
}
