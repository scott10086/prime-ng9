import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_LIST } from './menu-config';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent {

  menuList = MENU_LIST;

  constructor(
    private router: Router
  ) { }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
