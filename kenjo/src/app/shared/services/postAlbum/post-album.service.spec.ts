import { TestBed } from '@angular/core/testing';

import { PostAlbumService } from './post-album.service';

describe('PostAlbumService', () => {
  let service: PostAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
