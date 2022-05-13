import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/shared/interfaces/modelos';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    {title: 'titulo', path: '/assets/rtx3060ti.jpg'},
    {title: 'titulo', path: '/assets/rtx3060.jpg'},
    {title: 'titulo', path: '/assets/rx6600.jpg'},
    {title: 'titulo', path: '/assets/rtx3080.jpg'},
    {title: 'titulo', path: '/assets/rtx3070ti.jpg'},
    {title: 'titulo', path: '/assets/rx6700xt.jpg'}
  ];

  componentes: Array<Componente> = [];

  constructor() { }

  ngOnInit(): void {
    this.componentes[0].marca;
  }

}
