import { TestBed } from '@angular/core/testing';

import { GetArtistService } from './get-artist.service';

describe('GetArtistService', () => {
  let service: GetArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
