import { Pipe, PipeTransform } from '@angular/core';
/**
 * 根据数字的正负，在数字前面增加自定义符号
 */
@Pipe({
  name: 'addFrontUnit'
})
export class AddFrontUnitPipe implements PipeTransform {

  transform(value: any, args: { add: string, minus: string }): any {
    if (isNaN(parseFloat(value))) {
      return value;
    } else {
      if (!(parseFloat(value) + '').includes('-')) {
        return args.add + Math.abs(parseFloat(value));
      } else {
        return args.minus + Math.abs(parseFloat(value));
      }
    }
  }

}
