import { TestBed, inject } from '@angular/core/testing';

import { PadiserviceService } from './padiservice.service';

describe('PadiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PadiserviceService]
    });
  });

  it('should be created', inject([PadiserviceService], (service: PadiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
