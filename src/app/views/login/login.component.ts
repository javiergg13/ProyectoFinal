import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public usuario: FormGroup
  public mostrarError: boolean = false;
  public error!: string;

  constructor(private formBuilder: FormBuilder, private login: LoginService,
    private router: Router) {
    this.usuario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(new RegExp(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}/))]]
    });
  }

  ngOnInit(): void {
  }

  log() {
    this.login.logIn(this.usuario.value).subscribe(
      res => {
        this.mostrarError = false;
        this.error = '';
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', this.usuario.value.email);
        this.router.navigate(['principal/todo']);
      },
      err => {
        this.mostrarError = true;
        this.error = err.error.msg;  
      }
    )
  }
}
