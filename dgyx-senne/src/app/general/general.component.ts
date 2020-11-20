import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MENU_LIST, MENU_LIST1 } from './menu-config';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  items: MenuItem[];

  menuList: MenuItem[];

  constructor(
    private router: Router
  ) {
    this.items = MENU_LIST;
    this.menuList = MENU_LIST1;
  }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
  toggle(event) {
    console.log(event);
  }
}
