import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  transform(text: string, pos?: number): string {
    if (pos && text.length >= pos) { // on teste le paramètre 'pos'
      return text[pos]; // retourne le caractère en position choisie
    }
    return text[0]; // retourne le premier caractère d'une chaîne.
  }

}
