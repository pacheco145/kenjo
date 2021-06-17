import { TestBed } from '@angular/core/testing';

import { GetAllArtistsService } from './get-all-artists.service';

describe('GetAllArtistsService', () => {
  let service: GetAllArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
