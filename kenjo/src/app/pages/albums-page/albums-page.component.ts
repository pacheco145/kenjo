import { GetAllArtistsService } from 'src/app/shared/services/artists/getAllArtists/get-all-artists.service';
import { GetAllAlbumsService } from '../../shared/services/albums/getAllAlbums/get-all-albums.service';
import { Component, OnInit } from '@angular/core';
import {Album} from '../../shared/models/album.model'



@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})


export class AlbumsPageComponent implements OnInit {
  
  constructor(private getAllAlbums: GetAllAlbumsService, private getAllArtists: GetAllArtistsService) { 
    
  }
  albums: any;
  artistOfAlbum:any;
  

  ngOnInit(): void {
    this.listAlbums()
  }

  listAlbums = () => this.getAllAlbums.getAlbums().subscribe(res=> {
    this.albums = res;
    this.artistOfAlbumFunction(this.albums)
    // console.log(res)
  })

  artistOfAlbumFunction = (albums:any) => {
    this.getAllArtists.getArtists().subscribe((res:any)=>{
      let artists = res
      albums.forEach((album:any) => {
        album.artistName = artists.find((artist:any) => artist._id === album.artistId).name
        // console.log(album.artistName)
      });
    } )
  }

}
