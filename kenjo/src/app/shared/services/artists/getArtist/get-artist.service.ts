import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetArtistService {

  constructor(public http: HttpClient) { }

  getArtistById = (artistId:string) => this.http.get(`http://localhost:3000/artist/${artistId}`)
}
