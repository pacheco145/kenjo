import { ArtistsService } from './../../shared/services/artist/artists.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/shared/services/albums/albums.service';

@Component({
  selector: 'app-album-detail-page',
  templateUrl: './album-detail-page.component.html',
  styleUrls: ['./album-detail-page.component.scss']
})
export class AlbumDetailPageComponent implements OnInit {

  id:string = '';
  removeCheck = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private albumsService: AlbumsService, 
    private artistsService: ArtistsService,
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
  
  album:any = {};
  artistName:any;
  artistId:any;
  
  ngOnInit(): void {
    // console.log(this.id)
    this.oneAlbum()
    // this.artist()

  }
  
  oneAlbum = () => {
    this.albumsService.getAlbumById(this.id).subscribe(res => {
      // console.log(res)
      this.album = res;
      this.artist(this.album.artistId)
    })
  }

  artist = (artistId:string) => {
    this.artistsService.getArtistById(artistId).subscribe((res:any) => {
      // console.log(res)
      this.artistName = res.name;
      this.artistId = res._id;
    })
  }

  clickRemove = () => this.removeCheck = !this.removeCheck;

  removeAlbum = () => {
    this.albumsService.deleteAlbum(this.id)
    this.router.navigateByUrl('/albums');
  }

}
