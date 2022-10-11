import { TestBed } from '@angular/core/testing';

import { IdProductHolderService } from './id-product-holder.service';

describe('IdProductHolderService', () => {
  let service: IdProductHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdProductHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
