import { NgModule } from '@angular/core';
import { UisftechCommonModule } from 'fep-framework';
import { AddFrontUnitPipe } from './add-front-unit.pipe';
import { AddUnitPipe } from './add-unit.pipe';
import { MoneyPipePipe } from './moneyPipe.pipe';
import { StringPipe } from './string.pipe';


@NgModule({
    imports: [
        UisftechCommonModule,
    ],
    declarations: [
        AddUnitPipe,
        MoneyPipePipe,
        StringPipe,
        AddFrontUnitPipe
    ],
    exports: [
        AddUnitPipe,
        MoneyPipePipe,
        StringPipe,
        AddFrontUnitPipe
    ]
})

export class PipeModule { }
