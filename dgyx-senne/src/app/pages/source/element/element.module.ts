import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './../../../framework/primeng.module';
import { ElementComponent } from './element.component';
import { ElementRoutingModule } from './element.routing';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    ElementRoutingModule,
  ],
  declarations: [
    ElementComponent,
  ],
  exports: [
    ElementComponent,
  ],
  providers: [

  ]
})
export class ElementModule { }
