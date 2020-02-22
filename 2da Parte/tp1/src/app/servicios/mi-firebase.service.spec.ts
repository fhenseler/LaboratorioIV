import { TestBed, inject } from '@angular/core/testing';

import { MiFirebaseService } from './mi-firebase.service';

describe('MiFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiFirebaseService]
    });
  });

  it('should be created', inject([MiFirebaseService], (service: MiFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
