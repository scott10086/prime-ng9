import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  menuList = [
    {
      'label': '欢迎页',
      'routerLink': '/pages/1/welcome'
    },
    {
      'label': '布局页',
      'routerLink': '/pages/1/layout'
    },
    {
      'label': '元素页',
      'routerLink': '/pages/1/element'
    }
  ];

  constructor(
    private router: Router
  ) { }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
