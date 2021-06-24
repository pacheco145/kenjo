import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {

  // album:any;

  propsEdit:any = {
    req: "put",
  }

  constructor() { 
  }

  ngOnInit(): void {
  }


}
