import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
})

export class GeneralComponent {

  menuList = [
    {
      'label': '营销计划',
      'items': [
        {
          'label': '我的营销任务',
          'routerLink': '/pages/customer-official/marketing-plan/my-marketing-plan-list'
        },
        {
          'label': '营销计划列表',
          'routerLink': '/pages/customer-official/marketing-plan/marketing-plan-list'
        },
        {
          'label': '营销计划分解列表',
          'routerLink': '/pages/customer-official/marketing-plan/marketing-plan-split-list'
        },
        {
          'label': '营销计划编辑',
          'routerLink': '/pages/customer-official/marketing-plan/marketing-plan-tab'
        }
      ]
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
