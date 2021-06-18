import { EditArtistComponent } from './pages/edit-artist/edit-artist.component';
import { ArtistDetailPageComponent } from './pages/artist-detail-page/artist-detail-page.component';
import { AlbumDetailPageComponent } from './pages/album-detail-page/album-detail-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { AddAlbumComponent } from './pages/add-album/add-album.component';
import { AddArtistComponent } from './pages/add-artist/add-artist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsPageComponent } from './pages/artists-page/artists-page.component';
import { EditAlbumComponent } from './pages/edit-album/edit-album.component';

const routes: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'artists', component: ArtistsPageComponent},
  {path: 'add-artist', component: AddArtistComponent},
  {path: 'artist/:id', component: ArtistDetailPageComponent},
  {path: 'artist/:id/add-album', component: AddAlbumComponent},
  {path: 'artist/:id/edit-artist', component: EditArtistComponent},
  {path: 'albums', component: AlbumsPageComponent},
  {path: 'album/:id', component: AlbumDetailPageComponent},
  {path: 'album/:id/edit-album', component: EditAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
