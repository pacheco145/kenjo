import { GetAlbumService } from './../../shared/services/albums/getAlbum/get-album.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetArtistService } from 'src/app/shared/services/artists/getArtist/get-artist.service';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {

  id:string = '';

  constructor(private route: ActivatedRoute, private getOneAlbum: GetAlbumService, private getAlbumArtist: GetArtistService) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
  
  album:any;
  artistName:any;
  
  ngOnInit(): void {
    // console.log(this.id)
    this.oneAlbum()
    // this.artist()

  }
  
  oneAlbum = () => {
    this.getOneAlbum.getAlbumById(this.id).subscribe(res => {
      console.log(res)
      this.album = res;
      this.artist(this.album.artistId)
    })
  }

  artist = (artistId:string) => {
    this.getAlbumArtist.getArtistById(artistId).subscribe((res:any) => {
      // console.log(res.name)
      this.artistName = res.name
    })
  }

}
