import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetAllAlbumsService {

  constructor(public http: HttpClient) { }

  url = 'http://localhost:3000/albums/all'


  getAlbums = () => this.http.get(this.url)

}
