import { ActivatedRoute } from '@angular/router';
import { GetAlbumService } from './../../shared/services/albums/getAlbum/get-album.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.scss']
})
export class EditAlbumComponent implements OnInit {

  id:any;
  // album:any;

  propsEdit:any = {
    req: "put",
  }

  constructor(private route: ActivatedRoute, private getAlbum: GetAlbumService) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
    this.getAlbumInfo();
  }

  getAlbumInfo = () => {
    this.getAlbum.getAlbumById(this.id).subscribe(res => {
      this.propsEdit.album = res
      console.log(this.propsEdit.album)
    })
  }

}
