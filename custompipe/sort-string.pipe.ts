import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString'
})
export class SortStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    //learn sorting using pipes
    return value.sort().reverse();
  }

}
