import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Artist} from '../../models/artist.model'

const url = environment.APIendpoint;

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(public http: HttpClient) { }

  urlAllArtist = `${url}/artists/all`
  urlArtist = `${url}/artist`

  getArtists = () => this.http.get(this.urlAllArtist)

  getArtistById = (artistId:string) => this.http.get(`${this.urlArtist}/${artistId}`)

  addArtist = (newArtist: any) => {
    return this.http.post(this.urlArtist, newArtist)
  }

  putArtist = (artistId:string, artistEdited:Artist) => this.http.put(`${this.urlArtist}/${artistId}`, artistEdited)

  deleteArtist = (artistId:string) => {
    this.http.delete(`${this.urlArtist}/${artistId}`).subscribe()
  }


}
