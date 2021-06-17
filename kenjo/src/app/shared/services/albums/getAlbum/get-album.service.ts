import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumService {

  constructor(public http: HttpClient) { }

  getAlbumById = (albumId:string) => this.http.get(`http://localhost:3000/album/${albumId}`)
}
