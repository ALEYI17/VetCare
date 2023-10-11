import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCrudComponent } from './veterinario-crud.component';

describe('VeterinarioCrudComponent', () => {
  let component: VeterinarioCrudComponent;
  let fixture: ComponentFixture<VeterinarioCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinarioCrudComponent]
    });
    fixture = TestBed.createComponent(VeterinarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
