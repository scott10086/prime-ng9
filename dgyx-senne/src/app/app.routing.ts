import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EasyLoginComponent } from './login/easy/easy-login.component';
import { LoginCanActivat } from './login/loginCanActivate';
import { GeneralComponent } from './pages/general/general.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: 'login', component: EasyLoginComponent },
      {
        path: 'pages',
        component: GeneralComponent,
        canActivate: [LoginCanActivat],
        children: [
          { path: '', redirectTo: 'basic', pathMatch: 'full' },
          { path: 'basic', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
        ]
      },
    ]),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
