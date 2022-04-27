import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {

  detail: any

  constructor(
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {
    this.detail = []
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.detail = await this.albumService.getById(params['albumId']);
      console.log(this.detail);
    });
  }


}
