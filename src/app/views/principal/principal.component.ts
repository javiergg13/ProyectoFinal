import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos = [
    {title: 'titulo', path: ['/assets/rtx3060ti.jpg', '/assets/rtx3060.jpg',
'/assets/rx6600.jpg',
'/assets/rtx3080.jpg',
'/assets/rtx3070ti.jpg',
 '/assets/rx6700xt.jpg']},
 {title: 'titulo', path: ['/assets/rtx3060ti.jpg', '/assets/rtx3060.jpg',
'/assets/rx6600.jpg',
'/assets/rtx3080.jpg',
'/assets/rtx3070ti.jpg',
 '/assets/rx6700xt.jpg']},
 {title: 'titulo', path: ['/assets/rtx3060ti.jpg', '/assets/rtx3060.jpg',
'/assets/rx6600.jpg',
'/assets/rtx3080.jpg',
'/assets/rtx3070ti.jpg',
 '/assets/rx6700xt.jpg']}
  ];
  
  constructor(private log: LoginService) { }

  ngOnInit(): void {
  }



}
