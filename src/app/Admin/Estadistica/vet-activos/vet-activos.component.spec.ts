import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetActivosComponent } from './vet-activos.component';

describe('VetActivosComponent', () => {
  let component: VetActivosComponent;
  let fixture: ComponentFixture<VetActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VetActivosComponent]
    });
    fixture = TestBed.createComponent(VetActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
