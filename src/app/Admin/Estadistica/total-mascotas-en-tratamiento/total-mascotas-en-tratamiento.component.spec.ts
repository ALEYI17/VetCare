import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMascotasEnTratamientoComponent } from './total-mascotas-en-tratamiento.component';

describe('TotalMascotasEnTratamientoComponent', () => {
  let component: TotalMascotasEnTratamientoComponent;
  let fixture: ComponentFixture<TotalMascotasEnTratamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalMascotasEnTratamientoComponent]
    });
    fixture = TestBed.createComponent(TotalMascotasEnTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
