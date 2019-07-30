import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //return value;// null, 0 or value given using pipes.. will be reflected in the view
    if (value >100)
    return "Hundred";
    else
    return 0;
  }

}
