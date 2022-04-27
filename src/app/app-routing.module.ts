import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';

const routes: Routes = [
  { path: "", redirectTo: "/albums", pathMatch: "full" },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:albumId', component: DetailAlbumComponent },
  { path: '**', redirectTo: '/albums' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

