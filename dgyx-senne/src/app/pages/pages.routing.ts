import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'layout', loadChildren: () => import('./common/layout/layout.module').then(m => m.LayoutModule), },
      { path: 'source', loadChildren: () => import('./source/source.module').then(m => m.SourceModule), },
    ]),
  ],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
