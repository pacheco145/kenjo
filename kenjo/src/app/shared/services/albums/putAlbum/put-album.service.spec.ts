import { TestBed } from '@angular/core/testing';

import { PutAlbumService } from './put-album.service';

describe('PutAlbumService', () => {
  let service: PutAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
