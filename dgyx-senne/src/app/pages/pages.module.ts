import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { WelcomeComponent } from './welcome.component';

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
