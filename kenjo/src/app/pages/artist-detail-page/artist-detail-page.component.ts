import { AlbumsService } from '../../shared/services/albums/albums.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from 'src/app/shared/services/artist/artists.service';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {

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
  
  artist:any = {};
  albumsOfArtist:any;
  
  ngOnInit(): void {
    this.oneArtist()
    this.listAlbumsOfArtist()
    console.log(this.artist)

  }
  
  oneArtist = () => {
    this.artistsService.getArtistById(this.id).subscribe((res: any) => {
      // console.log(res)
      this.artist = res;
    })
  }

  listAlbumsOfArtist = () => this.albumsService.getAlbums().subscribe((res:any)=> {
    // console.log(res)
    this.albumsOfArtist = res.filter((album:any) => {
      if(album.artistId === this.id) return album
    });
    // console.log(this.albumsOfArtist)
  })

  clickRemove = () => this.removeCheck = !this.removeCheck;

  removeArtist = () => {
    this.artistsService.deleteArtist(this.id)
    this.router.navigateByUrl('/artists');
  }
}
