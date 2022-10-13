import { TestBed } from '@angular/core/testing';

import { GuradRegisterGuard } from './gurad-register.guard';

describe('GuradRegisterGuard', () => {
  let guard: GuradRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuradRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
