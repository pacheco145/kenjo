import { TestBed } from '@angular/core/testing';

import { DeleteArtistService } from './delete-artist.service';

describe('DeleteArtistService', () => {
  let service: DeleteArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
