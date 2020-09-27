import { Component, OnInit } from '@angular/core';
import { NetflixService, Film } from '../netflix.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public listadoSeries: Film[] = [];

  constructor(public netflixService: NetflixService) {
    this.netflixService.getSeries().subscribe((data: Film[]) => {
      this.listadoSeries = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
