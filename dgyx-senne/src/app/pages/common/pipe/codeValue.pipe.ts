
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'codeValuePie',
    pure: true
})
export class CodeValuePie implements PipeTransform {
    private name: string;

    /**
     * 码值管道扩展
     * @param values    码值表的value
     * @param args      码值表
     * @param char      可传参数  分隔符
     *
     *
     * 例如：
     * 码值表： [{label: '正常', value: '1'},{label: '冻结', value: '2'}]
     * 例子1.values：1  args：如上  char：null或者不传
     *          return: 正常
     * 例子2：values：1,2  args：如上  char：，
     *          return 正常,冻结
     */
    transform(values: any, args: any[], char: string): any {
        let value = [];
        const retValue = [];
        if (args) {
            value = !char ?
                [values] :
                (values && values.indexOf(char) > -1 ? values.split(char) : [values]);

            value.map(str => {
                args.forEach(item => {
                    if (item.value === str) {
                        retValue.push(item.label);
                    }
                });
            });
            return retValue.join(char || '');
        }
    }
}

