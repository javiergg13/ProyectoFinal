import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-cb',
  templateUrl: './filter-cb.component.html',
  styleUrls: ['./filter-cb.component.css']
})
export class FilterCBComponent implements OnInit {
  public panelOpenState = false;

  marcas: string[] = ['Intel', 'Amd', 'Nvidia'];
  constructor() { }

  ngOnInit(): void {
  }

}
