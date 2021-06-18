import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteAlbumService {

  constructor(public http: HttpClient) { }

  deleteAlbum = (albumId:string) => {
    this.http.delete(`http://localhost:3000/album/${albumId}`).subscribe()
  }

}
