import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaFindIdComponent } from './mascota-find-id.component';

describe('MascotaFindIdComponent', () => {
  let component: MascotaFindIdComponent;
  let fixture: ComponentFixture<MascotaFindIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotaFindIdComponent]
    });
    fixture = TestBed.createComponent(MascotaFindIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
