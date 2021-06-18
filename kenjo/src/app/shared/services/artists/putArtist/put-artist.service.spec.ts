import { TestBed } from '@angular/core/testing';

import { PutArtistService } from './put-artist.service';

describe('PutArtistService', () => {
  let service: PutArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
