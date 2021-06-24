import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/shared/services/artist/artists.service';

@Component({
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
  styleUrls: ['./artists-page.component.scss']
})
export class ArtistsPageComponent implements OnInit {

  constructor(private artistsService: ArtistsService, private router: Router) { }

  artists:any;



  // props:any = {
  //   url:"/artist/",
  //   typeOfInfo: "artists",
  // }

  ngOnInit(): void {

    console.log(this.router.getCurrentNavigation())
    this.listArtists()
  }
  
  listArtists = () => this.artistsService.getArtists().subscribe(res => {
    this.artists = res;
    // console.log(this.artists)
  })

}
