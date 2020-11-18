import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { LoginLayoutComponent } from './login/layout/login-layout.component';
import { LoginCanActivat } from './login/loginCanActivate';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: 'login', component: LoginLayoutComponent },
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
