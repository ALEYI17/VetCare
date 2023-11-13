import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardiaVeterinarioGuard } from './guardia-veterinario.guard';

describe('guardiaVeterinarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardiaVeterinarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
