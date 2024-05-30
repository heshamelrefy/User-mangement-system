import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './user-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    SharedModule
  ]
})
export class UserViewModule { }
