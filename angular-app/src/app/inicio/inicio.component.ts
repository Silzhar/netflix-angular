import { Component, OnInit } from '@angular/core';
import { NetflixService } from './../netflix.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public listadoInicio ;
  public searchText: string = '';

  constructor(public netflixService: NetflixService) {
    this.netflixService.getListadoInicio().subscribe((data) => {
      this.listadoInicio = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
