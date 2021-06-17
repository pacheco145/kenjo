import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Album} from '../../../models/album.model'

@Injectable({
  providedIn: 'root'
})


export class PostAlbumService {

  url = 'http://localhost:3000/album'


  constructor(private http: HttpClient) { }

  addAlbum = (newAlbum: Album) => {
    return this.http.post(this.url, newAlbum)
  }

}
