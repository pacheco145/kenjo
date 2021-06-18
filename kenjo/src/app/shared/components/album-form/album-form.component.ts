import { GetAlbumService } from './../../services/albums/getAlbum/get-album.service';
import { PutAlbumService } from './../../services/albums/putAlbum/put-album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostAlbumService } from '../../services/albums/postAlbum/post-album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit, OnChanges {

 @Input() props:any;

  album:any;
  newAlbum:any;
  id:any;
  button = 'Add album';
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public formBuilder: FormBuilder, 
    private postAlbum: PostAlbumService, 
    private putAlbum: PutAlbumService
  ) {

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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.props.req)
    if (this.props.req === "put") throw new Error('Method not implemented.');
  }
  

  ngOnInit(): void {
    this.newAlbum.value.artistId = this.id;
    this.album = this.props.album;
    if (this.props.req ==="put") {
      this.setFormValues()
      this.button = 'edit album'
    }
    // console.log(this.newAlbum.value)
    // console.log('req',this.req)
    // console.log('id',this.id)
  }


  setFormValues = () => {
    console.log(this.props.album)
    this.newAlbum.setValue({
      title: this.props.album.title,
      coverUrl: this.props.album.coverUrl,
      year: this.props.album.year,
      genre: this.props.album.genre,
    })
  }

  chooseCrud = async() => {
    if (this.props.req === "post") await this.addAlbum()
    else if (this.props.req === "put") await this.editAlbum()
    // this.router.navigateByUrl('/albums');
  }

  
  
  
  addAlbum = () => {
    this.newAlbum.value.artistId = this.id;
    this.postAlbum.addAlbum(this.newAlbum.value).subscribe()
  }

  editAlbum = () => {
    this.newAlbum.value.artistId = this.props.album.artistId;
    this.putAlbum.putAlbum(this.id, this.newAlbum.value).subscribe()
  }

}
