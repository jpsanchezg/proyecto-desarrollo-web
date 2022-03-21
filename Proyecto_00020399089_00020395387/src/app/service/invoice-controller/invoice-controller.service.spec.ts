import { TestBed } from '@angular/core/testing';

import { InvoiceControllerService } from './invoice-controller.service';

describe('InvoiceControllerService', () => {
  let service: InvoiceControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
