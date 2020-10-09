import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyPipe'
})
export class MoneyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args) {
      if (value === '') {
        return ''
      }
      const newvalue = Number(value)
      return newvalue.toFixed(args)
    } else {
      if (value === '') {
        return ''
      }
      const newvalue = Number(value)
      if (newvalue <= 0) {
        return newvalue.toFixed(2)
      } else {
        return `+${newvalue.toFixed(2)}`
      }
    }
  }
}
