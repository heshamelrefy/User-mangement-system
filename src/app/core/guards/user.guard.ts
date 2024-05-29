import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Roles } from '../roles/roles';
import { IUser } from 'src/app/shared/models/user';

export const userGuard: CanActivateFn = (route, state) => {
  let authSevice =  inject(AuthService)
  let router =  inject(Router)
  if ((authSevice.getCurrentUser() as IUser).role === Roles.User || (authSevice.getCurrentUser() as IUser).role === Roles.Admin) {
    return true;
  }
  router.navigate(['/login'])
  return false;
};
