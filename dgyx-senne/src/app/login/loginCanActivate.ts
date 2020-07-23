import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginCanActivat implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const loginFlag = sessionStorage.getItem('login');
    // 不存在当前登陆用户  跳回到登陆页面
    if (!loginFlag) {
      this.router.navigate(['/login']);
    }
    return true;

  }

}

