import { GetAllArtistsService } from './../../shared/services/artists/getAllArtists/get-all-artists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.scss']
})
export class ArtistsPageComponent implements OnInit {

  constructor(private getAllArtists: GetAllArtistsService) { }

  artists:any;

  // props:any = {
  //   url:"/artist/",
  //   typeOfInfo: "artists",
  // }

  ngOnInit(): void {

    this.listArtists()
  }
  
  listArtists = () => this.getAllArtists.getArtists().subscribe(res => {
    this.artists = res;
    // console.log(this.artists)
  })

}
