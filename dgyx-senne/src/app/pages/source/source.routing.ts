import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'element', pathMatch: 'full' },
      { path: 'element', loadChildren: () => import('./element/element.module').then(m => m.ElementModule), },
      { path: 'pipe', loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule), },
    ]),
  ],
  exports: [RouterModule],
})

export class SourceRoutingModule { }
