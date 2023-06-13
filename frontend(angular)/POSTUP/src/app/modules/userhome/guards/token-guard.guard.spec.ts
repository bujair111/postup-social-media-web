import { TestBed } from '@angular/core/testing';

import { TokenGuardGuard } from './token-guard.guard';

describe('TokenGuardGuard', () => {
  let guard: TokenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
