import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCrudComponent } from './navbar-crud.component';

describe('NavbarCrudComponent', () => {
  let component: NavbarCrudComponent;
  let fixture: ComponentFixture<NavbarCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarCrudComponent]
    });
    fixture = TestBed.createComponent(NavbarCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
