import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfData:any[],term:string): any[] {
    return arrayOfData.filter( (item)=>item.title.toLowerCase().includes(term.toLowerCase() ));
  }

}
