import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './../../../framework/primeng.module';
import { PipeComponent } from './pipe.component';
import { PipeRoutingModule } from './pipe.routing';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    PipeRoutingModule,
  ],
  declarations: [
    PipeComponent,
  ],
  exports: [
    PipeComponent,
  ],
  providers: [

  ]
})
export class PipeModule { }
