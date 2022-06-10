import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-imgs',
  templateUrl: './ver-imgs.component.html',
  styleUrls: ['./ver-imgs.component.css']
})
export class VerImgsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:
  {imgs: string}) { }

  ngOnInit(): void {
  }

}
