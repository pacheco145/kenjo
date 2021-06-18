import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteArtistService {

  constructor(public http: HttpClient) { }

  deleteArtist = (artistId:string) => {
    this.http.delete(`http://localhost:3000/artist/${artistId}`).subscribe()
  }

}
