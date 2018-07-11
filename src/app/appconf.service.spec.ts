import { TestBed, inject } from '@angular/core/testing';

import { AppconfService } from './appconf.service';

describe('AppconfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppconfService]
    });
  });

  it('should be created', inject([AppconfService], (service: AppconfService) => {
    expect(service).toBeTruthy();
  }));
});
