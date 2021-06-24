import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ArtistsService } from '../../services/artist/artists.service';


const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

  @Input() props:any;

  id:any;
  // artist:any;
  newArtist:any;
  button:any;
  message:string = '';
  submitted: boolean = false;
  
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
      name: ['', Validators.required],
      photoUrl: ['', [Validators.required, Validators.pattern(urlReg)]],
      birthdate: ['', Validators.required],
      deathDate: '',
    });
  }
  

  ngOnInit(): void {
    // console.log('PROPS',this.props)
    this.setButtonValue()
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
    this.submitted = true;
    if (this.newArtist.valid) {
      if (this.props.req === "post") await this.addArtist()
      else if (this.props.req === "put") await this.editArtist()
      // this.router.navigateByUrl('/artists');
    }
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
    this.artistService.addArtist(this.newArtist.value).then(res=>{
      // console.log('RES', res)
      if (!res.error) this.message = 'Artist added correctly'
      else this.message = res.error.error
    })
  }

  editArtist = () => {
    this.artistService.putArtist(this.id, this.newArtist.value).then(res=>{
      // console.log('RES', res)
      if (!res.error) this.message = 'Artist edited correctly'
      else this.message = res.error.error
    })
  }

}
