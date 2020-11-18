import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyCodeMapUtil } from '../../verify-code-map.util';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})

export class LoginFormComponent {

  verifySuccess = false;
  verifyCode = '46yu';
  verifyCodeImgData = '';
  userInfo = {
    userLoginId: '',
    password: '',
    logintype: 'PWD',
    logintypedesc: '密码验证',
    verifyCode: '46y'
  };
  errorMsgs: string[] = [];
  successMsg: string[] = [];

  private verifyCodeMapUtil = new VerifyCodeMapUtil();

  constructor(
    private router: Router
  ) {
    this.verifyCodeImgData = this.verifyCodeMapUtil.initVerifyCode('46yu');
  }


  login() {
    sessionStorage.setItem('login', 'true');
    this.router.navigate(['/pages']);
  }

  queryVerifyCode() { }

  verifyCodeKeyup() {
    this.verifySuccess = (this.verifyCode && this.verifyCode === this.userInfo.verifyCode);

    if (!this.verifySuccess && this.userInfo.verifyCode.length >= 4) {
      this.queryVerifyCode();
      this.userInfo.verifyCode = '';
    }
  }
  pressEnter(e) { }

}
