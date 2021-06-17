import { PostArtistService } from '../../shared/services/artists/postArtist/post-artist.service';
import { PostAlbumService } from './../../shared/services/albums/postAlbum/post-album.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}


