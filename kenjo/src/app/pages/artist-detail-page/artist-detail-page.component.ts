import { GetAllAlbumsService } from './../../shared/services/albums/getAllAlbums/get-all-albums.service';
import { Component, OnInit } from '@angular/core';
import { GetAllArtistsService } from 'src/app/shared/services/artists/getAllArtists/get-all-artists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetArtistService } from 'src/app/shared/services/artists/getArtist/get-artist.service';
import { DeleteArtistService } from 'src/app/shared/services/artists/deleteArtist/delete-artist.service';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {

  id:string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private getAllAlbums: GetAllAlbumsService, 
    private getOneArtist: GetArtistService,
    private deleteArtist: DeleteArtistService
  ) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
  
  artist:any;
  albumsOfArtist:any;
  
  ngOnInit(): void {
    this.oneArtist()
    this.listAlbumsOfArtist()
    console.log(this.artist)

  }
  
  oneArtist = () => {
    this.getOneArtist.getArtistById(this.id).subscribe((res: any) => {
      // console.log(res)
      this.artist = res;
    })
  }

  listAlbumsOfArtist = () => this.getAllAlbums.getAlbums().subscribe((res:any)=> {
    // console.log(res)
    this.albumsOfArtist = res.filter((album:any) => {
      if(album.artistId === this.id) return album
    });
    // console.log(this.albumsOfArtist)
  })

  removeArtist = () => {
    this.deleteArtist.deleteArtist(this.id)
    this.router.navigateByUrl('/artists');
  }
}
