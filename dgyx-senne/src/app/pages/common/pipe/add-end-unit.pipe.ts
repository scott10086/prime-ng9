import { Pipe, PipeTransform } from '@angular/core';
/**
 *  给末尾加自定义单位
 */
@Pipe({
  name: 'addEndUnitPipe'
})
export class AddEndUnitPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if (value) {
      return value + '' + args
    } else {
      return ''
    }
  }

}
