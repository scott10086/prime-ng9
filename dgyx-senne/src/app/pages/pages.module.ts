import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../general/welcome.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    WelcomeComponent,
  ],
  exports: [
    WelcomeComponent,
  ]
})
export class PagesModule { }
