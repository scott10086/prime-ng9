import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../../framework/primeng.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  declarations: [
    WelcomeComponent,
  ],
  exports: [
    WelcomeComponent,
  ],
  providers: [

  ]
})
export class WelcomeModule { }
