import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { LoginCanActivat } from './loginCanActivate';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoginLayoutComponent,
    LoginFormComponent,
  ],
  providers: [
    LoginCanActivat,
  ]
})
export class LoginModule { }
