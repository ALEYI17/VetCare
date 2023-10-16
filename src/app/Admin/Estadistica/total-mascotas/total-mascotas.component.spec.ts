import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMascotasComponent } from './total-mascotas.component';

describe('TotalMascotasComponent', () => {
  let component: TotalMascotasComponent;
  let fixture: ComponentFixture<TotalMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalMascotasComponent]
    });
    fixture = TestBed.createComponent(TotalMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
