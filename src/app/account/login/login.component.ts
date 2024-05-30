import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'src/app/core/roles/roles';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  submitted: boolean = false
  constructor(private fb:FormBuilder,private _AuthServices:AuthService,private _router:Router) {
    if (Object.keys(_AuthServices.getCurrentUser()).length !== 0 ) {
      if ((_AuthServices.getCurrentUser() as IUser).role === Roles.Admin) {
        
        this. _router.navigate(['/admin-view'])
      }
      else
      {
        this. _router.navigate(['/user-view'])

      }

    }
   }
  ngOnInit(): void {
    this.initForm()
  }
  initForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required]],
    })

  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this._AuthServices.login(this.loginForm.value)
  }
  
}
