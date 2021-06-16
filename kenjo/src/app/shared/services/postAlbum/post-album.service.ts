import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interface Album {
//   title: string;
//   artistId: string;
//   coverUrl: string;
//   year: number;
//   genre: string;
// }
@Injectable({
  providedIn: 'root'
})


export class PostAlbumService {

  url = 'http://localhost:3000/album'


  constructor(private http: HttpClient) { }

  addAlbum = (newAlbum: any) => {
    return this.http.post(this.url, newAlbum)
  }

}
