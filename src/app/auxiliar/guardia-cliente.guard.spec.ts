import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardiaClienteGuard } from './guardia-cliente.guard';

describe('guardiaClienteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardiaClienteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
