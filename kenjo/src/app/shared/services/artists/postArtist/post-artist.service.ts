import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostArtistService {

  url = 'http://localhost:3000/artist'


  constructor(private http: HttpClient) { }

  addArtist = (newArtist: any) => {
    return this.http.post(this.url, newArtist)
  }

  
}
