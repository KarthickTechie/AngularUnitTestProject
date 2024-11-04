import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  standalone: true
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown,limitTo:number , icon : string): unknown {
    const tmp = value as string;
    return `${icon} - ${tmp.substring(0,limitTo).toUpperCase()}${tmp.substring(limitTo,tmp.length-1)}`

  }

}
