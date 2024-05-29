import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './admin-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    AdminViewRoutingModule,
    SharedModule
  ]
})
export class AdminViewModule { }
