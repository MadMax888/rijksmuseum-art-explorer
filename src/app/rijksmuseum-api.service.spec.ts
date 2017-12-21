import { TestBed, inject } from '@angular/core/testing';

import { RijksmuseumApiService } from './rijksmuseum-api.service';

describe('RijksmuseumApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RijksmuseumApiService]
    });
  });

  it('should be created', inject([RijksmuseumApiService], (service: RijksmuseumApiService) => {
    expect(service).toBeTruthy();
  }));
});
