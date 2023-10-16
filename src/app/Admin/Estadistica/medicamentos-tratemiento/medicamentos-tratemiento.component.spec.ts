import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentosTratemientoComponent } from './medicamentos-tratemiento.component';

describe('MedicamentosTratemientoComponent', () => {
  let component: MedicamentosTratemientoComponent;
  let fixture: ComponentFixture<MedicamentosTratemientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentosTratemientoComponent]
    });
    fixture = TestBed.createComponent(MedicamentosTratemientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
