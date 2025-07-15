import { TestBed } from '@angular/core/testing';

import { TrserviceService } from './trservice.service';

describe('TrserviceService', () => {
  let service: TrserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
