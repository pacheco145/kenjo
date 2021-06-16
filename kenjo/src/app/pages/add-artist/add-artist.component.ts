import { PostArtistService } from './../../shared/services/postArtist/post-artist.service';
import { PostAlbumService } from './../../shared/services/postAlbum/post-album.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

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


