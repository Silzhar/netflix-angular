import { Component, OnInit } from '@angular/core';
import { Film, NetflixService } from '../netflix.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public listadoPeliculas: Film[] = [];

  constructor(public netflixService: NetflixService) {
    this.netflixService.getPeliculas().subscribe((data: Film[]) => {
      this.listadoPeliculas = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
