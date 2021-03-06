import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html'
})

export class ElementComponent {

  loadingShow: boolean = false;

  constructor(
    private router: Router
  ) { }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
  loading() {
    this.loadingShow = true;
  }
}
