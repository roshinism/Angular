import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, args: any): any {// remove the spread operator, the 3 dots(..args)
 
    if(!args){
      return value;
    }
    return value.filter((singleValue)=>{
      console.log(singleValue);
      return singleValue.name.toLowerCase().includes(args.toLowerCase())
    })
  }

}
