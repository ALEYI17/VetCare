import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardiaAdminGuard } from './guardia-admin.guard';

describe('guardiaAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardiaAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
