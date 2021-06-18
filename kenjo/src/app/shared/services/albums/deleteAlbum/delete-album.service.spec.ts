import { TestBed } from '@angular/core/testing';

import { DeleteAlbumService } from './delete-album.service';

describe('DeleteAlbumService', () => {
  let service: DeleteAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
