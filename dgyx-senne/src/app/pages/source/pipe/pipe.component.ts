import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html'
})

export class PipeComponent {

  constructor(
    private router: Router
  ) { }

  loginOut() {
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
