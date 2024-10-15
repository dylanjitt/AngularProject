import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true,
  //pure:true por defecto
})
export class PurePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    return value.filter(s=>s%2==0);
  }

}