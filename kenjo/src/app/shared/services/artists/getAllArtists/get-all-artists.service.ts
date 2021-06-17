import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllArtistsService {

  constructor(public http: HttpClient) { }

  url = 'http://localhost:3000/artists/all'


  getArtists = () => this.http.get(this.url)

}
