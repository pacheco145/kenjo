import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Album} from '../../../models/album.model'

@Injectable({
  providedIn: 'root'
})
export class PutAlbumService {

  constructor(public http: HttpClient) { }

  putAlbum = (albumId:string, albumEdited:Album) => this.http.put(`http://localhost:3000/album/${albumId}`, albumEdited)

}
