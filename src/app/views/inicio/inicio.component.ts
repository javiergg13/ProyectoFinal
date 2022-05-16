import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmarInvitadoComponent } from '../confirmar-invitado/confirmar-invitado.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ConfirmarInvitadoComponent);
  }

}
