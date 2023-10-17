import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMedicamentosComponent } from './top-medicamentos.component';

describe('TopMedicamentosComponent', () => {
  let component: TopMedicamentosComponent;
  let fixture: ComponentFixture<TopMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMedicamentosComponent]
    });
    fixture = TestBed.createComponent(TopMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
