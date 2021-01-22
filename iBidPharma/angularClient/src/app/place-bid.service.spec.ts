import { TestBed } from '@angular/core/testing';

import { PlaceBidService } from './place-bid.service';

describe('PlaceBidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceBidService = TestBed.get(PlaceBidService);
    expect(service).toBeTruthy();
  });
});
