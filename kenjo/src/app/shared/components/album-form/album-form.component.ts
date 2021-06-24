import { AlbumsService } from '../../services/albums/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

const urlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

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
  currentYear = new Date().getFullYear();
  submitted: boolean = false;
  message:string = '';
  
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
      title: ['', Validators.required],
      coverUrl: ['', [Validators.required, Validators.pattern(urlReg)]],
      year: ['', [Validators.required, Validators.min(0), Validators.max(this.currentYear)]],
      genre: ['', Validators.required],
    });
  }
  

  ngOnInit(): void {
    console.log('ID',this.id, typeof this.id)
    
    this.setButtonValues()
    if (this.props.req ==="put") this.getAlbumInfo()
  }
  
  setButtonValues = () => {
    if (this.props.req ==="post") this.button = 'add album'
    if (this.props.req ==="put") this.button = 'edit album'
  }


  setFormValues = (album:any) => {
    // console.log(album)
    this.newAlbum.setValue({
      title: album.title,
      coverUrl: album.coverUrl,
      year: album.year,
      genre: album.genre,
    })
  }

  chooseCrud = async() => {
    this.submitted = true
    if (this.newAlbum.valid) {
      if (this.props.req === "post") await this.addAlbum()
      else if (this.props.req === "put") await this.editAlbum()
      // this.router.navigateByUrl('/albums');
    }
  }

  
  
  
  addAlbum = () => {
    this.newAlbum.value.artistId = this.id;
    // console.log(this.newAlbum.value)
    this.albumsService.addAlbum(this.newAlbum.value).then(res=>{
      console.log('RES', res)
      if (!res.error) this.message = 'Album added correctly'
      else this.message = res.error.error
    })
  }

  editAlbum = () => {
    this.newAlbum.value.artistId = this.album.artistId;
    // console.log(this.newAlbum.value)
    this.albumsService.putAlbum(this.id, this.newAlbum.value).then(res=>{
      console.log('RES', res)
      if (!res.error) this.message = 'Album edited correctly'
      else this.message = res.error.errors
    })
  }

  getAlbumInfo = () => {
    this.albumsService.getAlbumById(this.id).subscribe((res:any) => {
      this.album = res;
      this.setFormValues(res)
    })
  }

}
