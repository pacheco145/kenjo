import { TestBed } from '@angular/core/testing';

import { PostArtistService } from './post-artist.service';

describe('PostArtistService', () => {
  let service: PostArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
