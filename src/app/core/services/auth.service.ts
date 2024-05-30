import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocallyStoredItemsKeys } from 'src/app/shared/models/locallyStoredItemsKeys';
import { IUser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { Roles } from '../roles/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = new BehaviorSubject<IUser| {}>({})
  constructor(private userService: UsersService,private router: Router) {
    
    this.currentUser.next(JSON.parse(localStorage.getItem(LocallyStoredItemsKeys.CurrentUser)! ) || {});
   }
  login(loginData: any)
  {
    this.userService.getUsers().subscribe((users:IUser[]) => {
      
      let user = users.find(user =>{ 
        // console.log(user,loginData);
        return user.email === loginData.email && user.password === loginData.password
        
      })
      console.log(user);
      if (user) {
        console.log(user);
        this.updateCurrentUserLocal(user);
      if (user.role === Roles.Admin) {
        
        this. router.navigate(['/admin-view'])
      }
      else
      {
        this. router.navigate(['/user-view'])

      }
      }
    })
  }
  updateCurrentUserLocal(user:IUser)
  {
    this.currentUser.next(user);
    localStorage.setItem(LocallyStoredItemsKeys.CurrentUser,JSON.stringify(user))
  }

  getCurrentUser()
  {
    return this.currentUser.value 
  }
  

  logOut() {
    this.currentUser.next({});
    localStorage.removeItem(LocallyStoredItemsKeys.CurrentUser)
    this.router.navigate(['/login'])
  }
}
