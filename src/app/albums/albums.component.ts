import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  arrAlbums: any;

  constructor(
    private albumService: AlbumService
  ) {
    this.arrAlbums = []
  }

  async ngOnInit() {
    const response = await this.albumService.getAlbums()
    this.arrAlbums = response;
  }

  async onInput(event: any) {
    const response = await this.albumService.getAlbums()
    this.arrAlbums = response;
    const textoFiltrado = event.target.value.toLowerCase();
    let arrBusqueda = new Array();
    for (let album of this.arrAlbums) {
      if (album.title.toLowerCase().includes(textoFiltrado)) {
        arrBusqueda.push(album)
      }
    }
    this.arrAlbums = arrBusqueda;

  }

}
