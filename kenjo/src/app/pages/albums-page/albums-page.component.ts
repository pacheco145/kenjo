import { ArtistsService } from './../../shared/services/artist/artists.service';
import { AlbumsService } from '../../shared/services/albums/albums.service';
import { Component, OnInit } from '@angular/core';
import {Album} from '../../shared/models/album.model'
import * as AOS from 'aos';


@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})


export class AlbumsPageComponent implements OnInit {
  
  constructor(private albumsService: AlbumsService, private artistsService: ArtistsService) { 
    
  }
  albums: any;
  artistOfAlbum:any;
  

  ngOnInit(): void {
    this.listAlbums()
    AOS.init();
  }

  listAlbums = () => this.albumsService.getAlbums().subscribe(res=> {
    this.albums = res;
    this.artistOfAlbumFunction(this.albums)
  })

  artistOfAlbumFunction = (albums:any) => {
    this.artistsService.getArtists().subscribe((res:any)=>{
      let artists = res
      albums.forEach((album:any) => {
        artists.forEach((artist:any) => {
          if (artist._id === album.artistId) {
            album.artistName = artist.name
          }
        })
        // console.log(album.artistName)
      });
    } )
  }

}
