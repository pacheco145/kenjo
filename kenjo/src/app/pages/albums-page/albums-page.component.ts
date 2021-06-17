import { GetAllAlbumsService } from '../../shared/services/albums/getAllAlbums/get-all-albums.service';
import { Component, OnInit } from '@angular/core';
import {Album} from '../../shared/models/album.model'



@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})


export class AlbumsPageComponent implements OnInit {
  
  constructor(private getAllAlbums: GetAllAlbumsService) { 
    
  }
  albums: any;
  

  ngOnInit(): void {
    this.listAlbums()
  }

  listAlbums = () => this.getAllAlbums.getAlbums().subscribe(res=> {
    this.albums = res;
    console.log(res)
  })

}
