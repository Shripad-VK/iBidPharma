import { TestBed } from '@angular/core/testing';

import { DistributorTransactionService } from './distributor-transaction.service';

describe('DistributorTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistributorTransactionService = TestBed.get(DistributorTransactionService);
    expect(service).toBeTruthy();
  });
});
