import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  userProfileForm!: FormGroup;
  viewMode = true;

  constructor(private fb: FormBuilder, private _AuthService:AuthService,private _userService:UsersService) {
    
  }

  ngOnInit(): void { 
    this.initForm()
    this.getCurrentUser()
  }
  initForm()
  {
    this.userProfileForm = this.fb.group({
      id: [{ value: null, disabled: this.viewMode }] ,
      name: [{ value: null, disabled: this.viewMode }, Validators.required],
      website: [{ value: null, disabled: this.viewMode }, Validators.required],
      address: [{ value: null, disabled: this.viewMode }, Validators.required],
      phone: [{ value: null, disabled: this.viewMode }, Validators.required],
      email: [{ value: null, disabled: this.viewMode }, Validators.email]
    });
  }
  switchMode() {
    this.viewMode = !this.viewMode;
    if (this.viewMode) {
      this.userProfileForm.disable();
    } else {
      this.userProfileForm.enable();
    }
  }

  getCurrentUser() {
    this._AuthService.currentUser.subscribe(user => {
      this.userProfileForm.patchValue({
        ...user
      })
    });

  }
  saveChanges() {
    if (this.userProfileForm.valid) {
      this._userService.editUser(this.userProfileForm.value).subscribe((res)=>{
        this._AuthService.updateCurrentUserLocal(res)
        
      })
    }
  }
}
