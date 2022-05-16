import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // private nombre: string;

  constructor(public log: LoginService) {
   
  }

  ngOnInit(): void {

  }

}
