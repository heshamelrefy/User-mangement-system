import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  isEdit:boolean = true;
  usersList:Array<IUser> = []
  userInfo:any = {}
  constructor(private fb:FormBuilder,private _userServices:UsersService,public _AuthServices:AuthService){}
  ngOnInit(): void {
    this.getUsers()
  }
  // display users list
  getUsers()
  {
    this._userServices.getUsers().subscribe((users)=>{
      this.usersList = users.filter((user)=>{
        return (this._AuthServices.getCurrentUser() as IUser).id !== user.id;
      });
    })
  }
  // get current user
  getCurrentUserInfo(event: any)
  {
    this.userInfo = event
    this.isEdit = true
  }
  deleteUser()
  {
    this._userServices.deleteUser(this.userInfo).subscribe((user)=>{
      this.usersList = this.usersList.filter(user => user.id !== this.userInfo.id)
    })
  }
// save chenges new user data
  saveUserData(newUser:any)
  {
    if(this.isEdit)
      {
       let index =  this.usersList.findIndex((user)=>{
          return user.id === newUser.id
        })
        this.usersList[index] = {...newUser}
      }
      else
      {
        this.usersList.push(newUser)
      }
    this.isEdit = true;
  }
  
}
