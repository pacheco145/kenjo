import { PostAlbumService } from './../../shared/services/albums/postAlbum/post-album.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Album} from '../../shared/models/album.model'


// interface Album {
//   title: string;
//   artistId: string;
//   coverUrl: string;
//   year: number;
//   genre: string;
// }

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})

export class AddAlbumComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
