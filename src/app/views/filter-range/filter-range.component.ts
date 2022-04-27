import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-range',
  templateUrl: './filter-range.component.html',
  styleUrls: ['./filter-range.component.css']
})
export class FilterRangeComponent implements OnInit {
  public panelOpenState = false;

  cantidadMinima: number | undefined;
  cantidadMaxima: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
