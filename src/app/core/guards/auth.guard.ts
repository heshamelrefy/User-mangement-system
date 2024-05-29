import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LocallyStoredItemsKeys } from 'src/app/shared/models/locallyStoredItemsKeys';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 let authSevice =  inject(AuthService)
  if (authSevice.getCurrentUser()) {
    return true;
  }
  
  return false;
};
