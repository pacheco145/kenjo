import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Artist} from '../../../models/artist.model'

@Injectable({
  providedIn: 'root'
})
export class PutArtistService {

  constructor(public http: HttpClient) { }
  
  putArtist = (artistId:string, artistEdited:Artist) => this.http.put(`http://localhost:3000/artist/${artistId}`, artistEdited)

}
