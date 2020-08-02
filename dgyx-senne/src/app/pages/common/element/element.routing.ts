import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElementComponent } from './element.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ElementComponent },
    ]),
  ],
  exports: [RouterModule],
})

export class ElementRoutingModule { }
