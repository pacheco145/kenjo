import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostAlbumService } from '../../services/albums/postAlbum/post-album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit {

 

  newAlbum:any;
  id:any;
  
  constructor(public formBuilder: FormBuilder, private postAlbum: PostAlbumService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  

    this.newAlbum = this.formBuilder.group({
      title: '',
      
      coverUrl: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
      year: '',
      genre: '',
    });
  }
  

  ngOnInit(): void {

    this.newAlbum.value.artistId = this.id;
    console.log(this.newAlbum.value)
  }


  addAlbum = () => {
    this.postAlbum.addAlbum(this.newAlbum.value).subscribe(res=>console.log(res))
  }

}
