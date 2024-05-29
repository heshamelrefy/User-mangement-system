import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';
import { Roles } from '../roles/roles';

export const adminGuard: CanActivateFn = (route, state) => {
  let authSevice =  inject(AuthService)
  let router =  inject(Router)
  if ((authSevice.getCurrentUser() as IUser).role === Roles.Admin) {
    return true;
  }
  else if((authSevice.getCurrentUser() as IUser).role === Roles.User)
  {
    router.navigate(['/user-view'])
  }
  else
  {
    router.navigate(['/login'])
  }
  return false;
};
