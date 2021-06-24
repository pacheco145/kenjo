import { AlbumsService } from '../../services/albums/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent implements OnInit {

 @Input() props:any;

  album:any;
  newAlbum:any;
  id:any;
  button:any;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public formBuilder: FormBuilder, 
    private albumsService: AlbumsService, 
  ) {

    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  

    this.newAlbum = this.formBuilder.group({
      title: '',
      coverUrl: '',
      year: '',
      genre: '',
    });
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(this.props.req)
  //   if (this.props.req === "put") throw new Error('Method not implemented.');
  // }
  

  ngOnInit(): void {
    console.log('PROPS',this.props)
    
    this.newAlbum.value.artistId = this.id;
    if (this.props.req ==="put") {
      this.button = 'edit album'
      this.getAlbumInfo()
    }
    if (this.props.req ==="post") this.button = 'add album'
  }


  setFormValues = (album:any) => {
    console.log(album)
    this.newAlbum.setValue({
      title: album.title,
      coverUrl: album.coverUrl,
      year: album.year,
      genre: album.genre,
    })
  }

  chooseCrud = async() => {
    if (this.props.req === "post") await this.addAlbum()
    else if (this.props.req === "put") await this.editAlbum()
    this.router.navigateByUrl('/albums');
  }

  
  
  
  addAlbum = () => {
    this.newAlbum.value.artistId = this.id;
    if (!this.newAlbum.value.coverUrl) {
      this.newAlbum.value.coverUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';
    }
    this.albumsService.addAlbum(this.newAlbum.value).subscribe()
  }

  editAlbum = () => {
    this.newAlbum.value.artistId = this.album.artistId;
    this.albumsService.putAlbum(this.id, this.newAlbum.value).subscribe()
  }

  getAlbumInfo = () => {
    this.albumsService.getAlbumById(this.id).subscribe((res:any) => {
      this.album = res;
      this.setFormValues(res)
    })
  }

}
