import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostArtistService } from '../../services/artists/postArtist/post-artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {

  

  newArtist;
  
  constructor(public formBuilder: FormBuilder, private postArtist: PostArtistService) {
    this.newArtist = this.formBuilder.group({
      name: '',
      photoUrl: 'https://los40.com/los40/imagenes/2019/10/18/los40classic/1571386693_641304_1571387117_miniatura_normal.jpg',
      birthdate: '',
      deathDate: null,
    });
  }
  

  ngOnInit(): void {}


  addArtist = () => {
    console.log(this.newArtist.value)
    this.postArtist.addArtist(this.newArtist.value).subscribe(res=>console.log(res))
  }

}
