import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SourceRoutingModule } from './source.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SourceRoutingModule,
    RouterModule.forChild([]),
  ],
})
export class SourceModule { }
