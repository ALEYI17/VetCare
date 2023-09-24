import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaCrudComponent } from './mascota-crud.component';

describe('MascotaCrudComponent', () => {
  let component: MascotaCrudComponent;
  let fixture: ComponentFixture<MascotaCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaCrudComponent]
    });
    fixture = TestBed.createComponent(MascotaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
