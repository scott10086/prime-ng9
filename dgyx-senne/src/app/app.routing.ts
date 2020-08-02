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
          { path: '', redirectTo: '1', pathMatch: 'full' },
          { path: '1', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
        ]
      },
    ]),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
