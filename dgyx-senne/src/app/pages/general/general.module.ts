import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng';
import { PrimeNgModule } from '../../framework/primeng.module';
import { GeneralComponent } from './general.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  declarations: [
    GeneralComponent,
  ],
  exports: [
    GeneralComponent,
  ],
  providers: [
    ConfirmationService
  ]
})
export class GeneralModule { }
