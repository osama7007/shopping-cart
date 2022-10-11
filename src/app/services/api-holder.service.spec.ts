import { TestBed } from '@angular/core/testing';

import { ApiHolderService } from './api-holder.service';

describe('ApiHolderService', () => {
  let service: ApiHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
