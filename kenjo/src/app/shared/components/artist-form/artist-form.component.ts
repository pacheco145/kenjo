import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ArtistsService } from '../../services/artist/artists.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

  @Input() props:any;

  id:any;
  // artist:any;
  newArtist;
  button:any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder, 
    private artistService: ArtistsService,
    ) {

      this.route.params.subscribe(params => {
        this.id = params['id']
      })

    this.newArtist = this.formBuilder.group({
      name: '',
      photoUrl: '',
      birthdate: '',
      deathDate: null,
    });
  }
  

  ngOnInit(): void {
    console.log('PROPS',this.props)
    this.setButtonValue()
    this.getArtistInfo()
    if (this.props.req === "put") this.getArtistInfo()
  }

  setButtonValue = () => {
    if (this.props.req === "post") this.button = "Add artist"
    if (this.props.req === "put") this.button = "Edit artist"
  }

  setFormValues = (artist:any) => {
    // console.log(formatDate(artist.deathDate, 'yyyy-MM-dd', 'en'))
    // console.log(artist.deathDate)
    if (artist.deathDate) artist.deathDate = formatDate(artist.deathDate, 'yyyy-MM-dd', 'en')
    
    this.newArtist.setValue({
      name: artist.name,
      photoUrl: artist.photoUrl,
      birthdate: formatDate(artist.birthdate, 'yyyy-MM-dd', 'en'),
      deathDate: artist.deathDate,
    })
  }

  chooseCrud = async() => {
    if (this.props.req === "post") await this.addArtist()
    else if (this.props.req === "put") await this.editArtist()
    this.router.navigateByUrl('/artists');
  }

  getArtistInfo = () => {
    this.artistService.getArtistById(this.id).subscribe(res => {
      // this.artist = res;
      this.setFormValues(res)
    })
  }


  addArtist = () => {
    // console.log(this.newArtist.value)
    if (!this.newArtist.value.photoUrl) {
      this.newArtist.value.photoUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    }
    this.artistService.addArtist(this.newArtist.value).subscribe(res=>console.log(res))
  }

  editArtist = () => {
    this.artistService.putArtist(this.id, this.newArtist.value).subscribe()
  }

}
