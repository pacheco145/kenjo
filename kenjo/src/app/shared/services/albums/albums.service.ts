import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Album} from '../../models/album.model'

const url = environment.APIendpoint;

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(public http: HttpClient) { }

  urlAllAlbums = `${url}/albums/all`
  urlAlbum = `${url}/album`


  getAlbums = () => this.http.get(this.urlAllAlbums)

  getAlbumById = (albumId:string) => this.http.get(`${this.urlAlbum}/${albumId}`)

  addAlbum = (newAlbum: Album) => {
    return this.http.post(this.urlAlbum, newAlbum)
      .toPromise()
      .then(
        res => res,
        msg => msg
      );
  }

  putAlbum = (albumId:string, albumEdited:Album) => {
    return this.http.put(`${this.urlAlbum}/${albumId}`, albumEdited)
      .toPromise()
      .then(
        res => res,
        msg => msg
      );
  }

  deleteAlbum = (albumId:string) => {
    this.http.delete(`${this.urlAlbum}/${albumId}`).toPromise()
  }


}
