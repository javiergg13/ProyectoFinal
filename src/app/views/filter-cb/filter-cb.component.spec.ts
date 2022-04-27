import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCBComponent } from './filter-cb.component';

describe('FilterCBComponent', () => {
  let component: FilterCBComponent;
  let fixture: ComponentFixture<FilterCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
