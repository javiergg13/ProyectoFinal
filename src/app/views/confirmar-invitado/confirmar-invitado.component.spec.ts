import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarInvitadoComponent } from './confirmar-invitado.component';

describe('ConfirmarInvitadoComponent', () => {
  let component: ConfirmarInvitadoComponent;
  let fixture: ComponentFixture<ConfirmarInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarInvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
