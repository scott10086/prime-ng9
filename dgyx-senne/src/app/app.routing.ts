import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EasyLoginComponent } from './login/easy/easy-login.component';
import { LoginCanActivat } from './login/loginCanActivate';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: 'login', component: EasyLoginComponent },
      {
        path: 'pages',
        component: WelcomeComponent,
        canActivate: [LoginCanActivat],
        // children: [
        //   { path: '', redirectTo: 'home', pathMatch: 'full' },
        //   { path: 'home', component: UisftechGatewayHome },
        // ]
      },
    ]),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
