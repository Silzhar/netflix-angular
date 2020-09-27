import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'peliculas', component: PeliculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
