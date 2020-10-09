
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberValuePie',
    pure: true
})

export class NumberValuePie implements PipeTransform {
    private name: string;
    transform(value: number, args: any): any {
        if (value) {
            let str = value + '';
            let d = str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            return d;
        } else {
            return '';
        }
    }
}
