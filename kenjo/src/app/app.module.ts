import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlbumComponent } from './pages/add-album/add-album.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlbumComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
