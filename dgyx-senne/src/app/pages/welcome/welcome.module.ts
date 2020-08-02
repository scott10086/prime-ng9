import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent1 } from './welcome.component1';
import { WelcomeRoutingModule } from './welcome.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WelcomeRoutingModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    WelcomeComponent1,
  ],
  exports: [
    WelcomeComponent1,
  ]
})
export class WelcomeModule { }
