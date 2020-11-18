import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MENU_LIST } from './menu-config';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  items: MenuItem[];

  menuList = MENU_LIST;

  constructor(
    private router: Router
  ) {
    this.items = MENU_LIST;
  }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
  toggle(event) {
    console.log(event);
  }
}
