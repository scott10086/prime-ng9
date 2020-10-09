import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value) {
      if (!value.includes('，')) {
        return value
      } else {
        const str = value.replace(new RegExp(/，/g), ',');
        return str;
      }
    }
  }
}
