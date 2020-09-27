import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  transform(titulo: string, ...args: unknown[]): string {
    return titulo.toUpperCase();
  }

}
