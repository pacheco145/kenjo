import { TestBed } from '@angular/core/testing';

import { GetAlbumsOfArtistService } from './get-albums-of-artist.service';

describe('GetAlbumsOfArtistService', () => {
  let service: GetAlbumsOfArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAlbumsOfArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
