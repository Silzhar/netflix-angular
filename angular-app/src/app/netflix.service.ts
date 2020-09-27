import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  public rutaInicio: string = 'https://jsonblob.com/api/91467cb4-9f7f-11ea-bb3c-c1622b158f72';
  public rutaPeliculas: string = 'https://jsonblob.com/api/25672c0d-9f80-11ea-bb3c-b7fd8bc47ca0';
  public rutaSeries: string = 'https://jsonblob.com/api/b9f20e24-9f80-11ea-bb3c-135f3a58d8ed';

  constructor(public httpClient: HttpClient) { }

  public getListadoInicio(){
    const obsInicio = this.httpClient.get(this.rutaInicio);
    return obsInicio;
  }

  public getPeliculas(){
    const obsInicio = this.httpClient.get(this.rutaPeliculas);
    return obsInicio;
  }

  public getSeries(){
    const obsInicio = this.httpClient.get(this.rutaSeries) ;
    return obsInicio;
  }
}

export interface Film {
  title: string;
  numSeasons: number;
  imageUrl: string;
  tags: string[];
 }
