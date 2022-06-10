import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerImgsComponent } from './ver-imgs.component';

describe('VerImgsComponent', () => {
  let component: VerImgsComponent;
  let fixture: ComponentFixture<VerImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerImgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
