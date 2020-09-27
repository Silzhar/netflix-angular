import { Component, OnInit, Input } from '@angular/core';
import { Film, NetflixService } from '../netflix.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: Film = null;
  public listadoPeliculas;

  constructor(public netflixService: NetflixService) {
    this.netflixService.getListadoInicio().subscribe((data) => {
      this.listadoPeliculas = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
