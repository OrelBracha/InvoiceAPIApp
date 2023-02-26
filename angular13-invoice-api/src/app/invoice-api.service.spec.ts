import { TestBed } from '@angular/core/testing';

import { invoiceApiService } from './invoice-api.service';

describe('invoiceApiService', () => {
  let service: invoiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(invoiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
