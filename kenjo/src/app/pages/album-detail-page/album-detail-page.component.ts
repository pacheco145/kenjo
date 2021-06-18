import { DeleteAlbumService } from './../../shared/services/albums/deleteAlbum/delete-album.service';
import { GetAlbumService } from './../../shared/services/albums/getAlbum/get-album.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetArtistService } from 'src/app/shared/services/artists/getArtist/get-artist.service';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {

  id:string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private getOneAlbum: GetAlbumService, 
    private getAlbumArtist: GetArtistService,
    private deleteAlbum: DeleteAlbumService
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
  
  album:any;
  artistName:any;
  artistId:any;
  
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
      console.log(res)
      this.artistName = res.name;
      this.artistId = res._id;
    })
  }

  removeAlbum = () => {
    this.router.navigateByUrl('/albums');
    this.deleteAlbum.deleteAlbum(this.id)
  }

}
