import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { PostArtistService } from '../../services/artists/postArtist/post-artist.service';
import { GetArtistService } from '../../services/artists/getArtist/get-artist.service';
import { formatDate } from '@angular/common';
import { PutArtistService } from '../../services/artists/putArtist/put-artist.service';

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
    private getArtist: GetArtistService,
    private postArtist: PostArtistService,
    private putArtist: PutArtistService,
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
    this.setButtonValue()
    this.getArtistInfo()
    if (this.props.req === "put") this.getArtistInfo()
  }

  setButtonValue = () => {
    if (this.props.req === "post") this.button = "Add album"
    if (this.props.req === "put") this.button = "Edit album"
  }

  setFormValues = (artist:any) => {
    console.log(formatDate(artist.deathDate, 'yyyy-MM-dd', 'en'))
    console.log(artist.deathDate)
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
    this.getArtist.getArtistById(this.id).subscribe(res => {
      // this.artist = res;
      this.setFormValues(res)
    })
  }


  addArtist = () => {
    // console.log(this.newArtist.value)
    if (!this.newArtist.value.photoUrl) {
      this.newArtist.value.photoUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    }
    this.postArtist.addArtist(this.newArtist.value).subscribe(res=>console.log(res))
  }

  editArtist = () => {
    this.putArtist.putArtist(this.id, this.newArtist.value).subscribe()
  }

}
