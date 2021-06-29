import { ArtistsService } from './../../shared/services/artist/artists.service';
import { AlbumsService } from '../../shared/services/albums/albums.service';
import { Component, OnInit } from '@angular/core';
import {Album} from '../../shared/models/album.model'
import * as AOS from 'aos';
import {MatPaginatorModule} from '@angular/material/paginator';


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
  albumsByPage: any;
  page = 1;
  msg: string = '';
  

  ngOnInit(): void {
    if (history.state.msg) this.msg = history.state.msg
    this.listAlbums()
    AOS.init();
  }

  pageUp = () => {
    console.log(this.page)
    this.page++;
    // console.log(this.page)
    this.getAlbumsByPage(this.albums)
  }
  pageDown = () => {
    if (this.page > 1) {
      this.page--;
      this.getAlbumsByPage(this.albums)
    }
    // console.log('workin')
  }

  listAlbums = () => this.albumsService.getAlbums().subscribe(res=> {
    this.albums = res;
    this.artistOfAlbumFunction(this.albums)
    // console.log(this.albums.slice(this.page - 1, this.page + 11))
    this.getAlbumsByPage(this.albums)
  })
  
  getAlbumsByPage = (allAlbums:any) => {
    this.albumsByPage = allAlbums.slice(12*this.page - 12, 12*this.page)
    console.log(this.albumsByPage)
  }

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
