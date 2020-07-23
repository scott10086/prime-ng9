import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../framework/primeng.module';
import { EasyLoginComponent } from './easy/easy-login.component';
import { LoginCanActivat } from './loginCanActivate';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  declarations: [
    EasyLoginComponent,
  ],
  exports: [
    EasyLoginComponent,
  ],
  providers: [
    LoginCanActivat,
  ]
})
export class LoginModule { }
