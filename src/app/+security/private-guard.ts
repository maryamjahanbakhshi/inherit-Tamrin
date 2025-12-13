import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const privateGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem('tokenU1')) {
    return true;
  }
  if (localStorage.getItem('tokenU1')) {
    sessionStorage.setItem('tokenU1', localStorage.getItem('tokenU1') ?? '');
    return true;
  }
  const router = inject(Router)
  router.navigateByUrl('/login')
  return false;
};
