import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlbumComponent } from './pages/add-album/add-album.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';
import { ArtistsPageComponent } from './pages/artists-page/artists-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AlbumDetailPageComponent } from './pages/album-detail-page/album-detail-page.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ArtistDetailPageComponent } from './pages/artist-detail-page/artist-detail-page.component';
import { AlbumFormComponent } from './shared/components/album-form/album-form.component';
import { ArtistFormComponent } from './shared/components/artist-form/artist-form.component';
import { EditAlbumComponent } from './pages/edit-album/edit-album.component';
import { EditArtistComponent } from './pages/edit-artist/edit-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlbumComponent,
    AddArtistComponent,
    ArtistsPageComponent,
    AlbumsPageComponent,
    AlbumDetailPageComponent,
    NavbarComponent,
    ArtistDetailPageComponent,
    AlbumFormComponent,
    ArtistFormComponent,
    EditAlbumComponent,
    EditArtistComponent,
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
