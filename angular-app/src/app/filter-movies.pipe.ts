import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './netflix.service';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(allFilms: Film[], ...args: string[]): Film[] {
    const searchText: string = args[0];
    return allFilms.filter((pelicula) => {
      const titleMayus: string = pelicula.title.toUpperCase();
      const searchTextMayus: string = searchText.toUpperCase();
      return titleMayus.includes(searchTextMayus);
    });

  }

}
