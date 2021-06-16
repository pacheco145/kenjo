import { PostAlbumService } from './../../shared/services/postAlbum/post-album.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


// interface Album {
//   title: string;
//   artistId: string;
//   coverUrl: string;
//   year: number;
//   genre: string;
// }

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})

export class AddAlbumComponent implements OnInit {
  newAlbum;
  
  constructor(public formBuilder: FormBuilder, private postAlbum: PostAlbumService) {
    this.newAlbum = this.formBuilder.group({
      title: '',
      artistId: '',
      coverUrl: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
      year: '',
      genre: '',
    });
  }
  

  ngOnInit(): void {}


  addAlbum = () => {
    console.log(this.newAlbum.value)
    this.postAlbum.addAlbum(this.newAlbum.value).subscribe(res=>console.log(res))
  }
}
