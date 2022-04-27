import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/albums'
  }

  getAlbums() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl))
  }
  getById(albumId: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + `/${albumId}/photos`))
  }

}
