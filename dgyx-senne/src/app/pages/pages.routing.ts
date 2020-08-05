import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './source/welcome.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'element', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'layout', loadChildren: () => import('./common/layout/layout.module').then(m => m.LayoutModule), },
      { path: 'element', loadChildren: () => import('./source/element/element.module').then(m => m.ElementModule), },
    ]),
  ],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
