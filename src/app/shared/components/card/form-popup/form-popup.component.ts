import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent implements OnInit,OnChanges {
  @Input() isEdit!: boolean;
  @Input() userInfo!: any;
  @Output() userInfoAddEdit = new EventEmitter<any>();
  userForm: FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private _userServices:UsersService){}
  ngOnInit(): void {
    this.initForm()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userInfo']?.currentValue !== changes['userInfo']?.previousValue) {
      this.patchForm()
    }
    
  }
  initForm(): void {
    this.userForm = this.fb.group({
      id:[null],
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      address:[null,[Validators.required]],
      phone:[null,[Validators.required]] 
    })

  }
  // get controls from
  get userF(){
    return this.userForm.controls;
  }
// patch user info to form
  patchForm(){
    if (Object.keys(this.userInfo).length) {
      this.userForm.patchValue({...this.userInfo})
    }
    else
    {
      this.userForm.reset()
    }

  }
  // save user
  saveChanges(){
    if (this.isEdit) {
      this._userServices.editUser(this.userForm.value).subscribe(user =>{
        this.userInfoAddEdit.emit(user)
      })
    }
    else
    {
      this._userServices.addUser(this.userForm.value).subscribe(user =>{
        this.userInfoAddEdit.emit(user)
        
      })
      
    }
  }
}
