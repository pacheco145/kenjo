import { Component, OnInit } from '@angular/core';
import { GetAllArtistsService } from 'src/app/shared/services/artists/getAllArtists/get-all-artists.service';
import { ActivatedRoute } from '@angular/router';
import { GetArtistService } from 'src/app/shared/services/artists/getArtist/get-artist.service';

@Component({
  selector: 'app-artist-detail-page',
  templateUrl: './artist-detail-page.component.html',
  styleUrls: ['./artist-detail-page.component.scss']
})
export class ArtistDetailPageComponent implements OnInit {

  id:string = '';

  constructor(private route: ActivatedRoute, private getOneArtist: GetArtistService) { 
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }
  
  artist:any;
  
  ngOnInit(): void {
    // console.log(this.id)
    this.oneArtist()

  }
  
  oneArtist = () => {
    this.getOneArtist.getArtistById(this.id).subscribe((res: any) => {
      console.log(res)
      this.artist = res;
    })
  }
}
