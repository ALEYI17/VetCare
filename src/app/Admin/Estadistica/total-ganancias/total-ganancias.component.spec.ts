import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGananciasComponent } from './total-ganancias.component';

describe('TotalGananciasComponent', () => {
  let component: TotalGananciasComponent;
  let fixture: ComponentFixture<TotalGananciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalGananciasComponent]
    });
    fixture = TestBed.createComponent(TotalGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
