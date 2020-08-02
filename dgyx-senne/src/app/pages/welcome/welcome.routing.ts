import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent1 } from './welcome.component1';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'welcome1', pathMatch: 'full' },
      { path: 'welcome1', component: WelcomeComponent1 },
      { path: 'layout', loadChildren: () => import('../common/layout/layout.module').then(m => m.LayoutModule), },
      { path: 'element', loadChildren: () => import('../common/element/element.module').then(m => m.ElementModule), },
    ]),
  ],
  exports: [RouterModule],
})

export class WelcomeRoutingModule { }
