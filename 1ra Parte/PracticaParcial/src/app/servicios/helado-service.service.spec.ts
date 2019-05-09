import { TestBed, inject } from '@angular/core/testing';

import { HeladoServiceService } from './helado-service.service';

describe('HeladoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeladoServiceService]
    });
  });

  it('should be created', inject([HeladoServiceService], (service: HeladoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
