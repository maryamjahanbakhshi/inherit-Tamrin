import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-private-templat',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './private-templat.html',
  styleUrl: './private-templat.scss',
})
export class PrivateTemplat {
  router=inject(Router)
  logOut() {
    sessionStorage.clear();
    localStorage.removeItem('tokenU1');
    this.router.navigateByUrl('/login');
  }
}
