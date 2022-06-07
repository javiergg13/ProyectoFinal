import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFilterObject } from 'src/app/shared/interfaces/modelos';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isFiltered = false;

  public filterSelected: IFilterObject = {
    filterByText: '',
    filterByStatus: null
  };

  public filterSelectedSaved: IFilterObject = {
    filterByText: '',
    filterByStatus: null
  };

  @Output() filter: EventEmitter<IFilterObject> = new EventEmitter<IFilterObject>();

  public clearFilter() {
    this.isFiltered = false;
    this.filterSelected = {
      filterByText: '',
      filterByStatus: null};

    this.filter.emit(this.filterSelected);
  }

  public statusChange(): void {
    this.filterSelected.filterByStatus = this.filterSelected.filterByStatus;
    this.setFilters();
    this.filter.emit(this.filterSelected);
  }

  public filterByText(): void {
    this.filterSelected.filterByText = this.filterSelected.filterByText;
    this.setFilters();

    this.filter.emit(this.filterSelected);
  }

  private setFilters() {
    if (this.filterSelected.filterByText !== "" || this.filterSelected.filterByStatus !== null) {
      this.isFiltered = true;
    }
  }

}