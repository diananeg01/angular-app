import {CanActivateFn, Router} from '@angular/router';
import {of} from "rxjs";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(!!localStorage.getItem('token')) {
    return true;
  }
  return of(router.createUrlTree(['/login']));
  // return !!localStorage.getItem('token') ?? router.createUrlTree(['/login']);

};
