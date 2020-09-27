import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { NetflixComponent } from './netflix/netflix.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { TituloPipe } from './titulo.pipe';
import { FilterMoviesPipe } from './filter-movies.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SeriesComponent,
    PeliculasComponent,
    InicioComponent,
    NetflixComponent,
    PeliculaComponent,
    TituloPipe,
    FilterMoviesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
