import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from './../../../framework/primeng.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PrimeNgModule
  ],
  declarations: [
    LayoutComponent,
  ],
  exports: [
    LayoutComponent,
  ],
  providers: [

  ]
})
export class LayoutModule { }
