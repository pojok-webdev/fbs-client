import { TestBed, inject } from '@angular/core/testing';

import { FbfeeService } from './fbfee.service';

describe('FbfeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FbfeeService]
    });
  });

  it('should be created', inject([FbfeeService], (service: FbfeeService) => {
    expect(service).toBeTruthy();
  }));
});
