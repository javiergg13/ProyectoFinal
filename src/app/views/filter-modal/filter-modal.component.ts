import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFilterObject } from 'src/app/shared/interfaces/modelos';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {

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

  constructor(
    public dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFilterObject) {
    this.filterSelectedSaved = { ...this.data };
    this.filterSelected = { ...this.data };
    this.setFilters()
  }

  public filterChange(newFilter: IFilterObject): void {
    this.filterSelected = newFilter;
  }

  public disableButton(): boolean {
    return this.filterSelected.filterByText === this.filterSelectedSaved.filterByText &&
      this.filterSelected.filterByStatus === this.filterSelectedSaved.filterByStatus;
  }

  public applyFilter() {
    this.filterSelectedSaved = this.filterSelected;
    this.dialogRef.close(this.filterSelectedSaved);
  }

  public notApplyFilter() {
    this.dialogRef.close(this.filterSelectedSaved);
  }

  public filterByText(): void {
    this.filterSelected.filterByText = this.filterSelected.filterByText;
    this.setFilters();
  }

  public filterByStatus(): void {
    this.filterSelected.filterByStatus = this.filterSelected.filterByStatus;
    this.setFilters();
  }

  private setFilters() {
    if (this.filterSelected.filterByText !== "" || this.filterSelected.filterByStatus !== null) {
      this.isFiltered = true;
    }
  }

  public clearFilter() {
    this.isFiltered = false;
    this.filterSelected = {
      filterByText: '',
      filterByStatus: null
    };
  }
}

