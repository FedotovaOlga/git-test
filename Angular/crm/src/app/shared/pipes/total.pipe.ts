import { Pipe, PipeTransform } from '@angular/core';

// décorateur
@Pipe({
  name: 'total' // c'est ça qu'on va utiliser comme "uppercase" tout à l'heure
})
export class TotalPipe implements PipeTransform {

  transform(val: number, coef: number, tva ?: number): number {
    console.log('déclenché');


    if (tva) return val * coef * (1 + tva/100); // TTC
    // 1200 x 3 x 1.2° (1.20 = 20% de la tva)
    return val * coef; // (HT)
  }

}

// {{ arg1 | total :arg2 :arg3}}
