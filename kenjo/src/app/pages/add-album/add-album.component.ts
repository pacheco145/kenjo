import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Album} from '../../shared/models/album.model'



@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})

export class AddAlbumComponent implements OnInit {
  constructor() { }

  propsAdd:any = {
    req: "post",
  }

  ngOnInit(): void {
  }
}
