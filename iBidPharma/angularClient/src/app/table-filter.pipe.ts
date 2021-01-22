import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
      const keys = Object.keys(filters).filter(key => filters[key]);
      console.log(keys);
      const filterUser = user => keys.every(key => user[key] === filters[key]);
    return keys.length ? list.filter(filterUser) : list;
  }

}