import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAventasComponent } from './total-aventas.component';

describe('TotalAventasComponent', () => {
  let component: TotalAventasComponent;
  let fixture: ComponentFixture<TotalAventasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalAventasComponent]
    });
    fixture = TestBed.createComponent(TotalAventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
