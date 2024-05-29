import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ],
  exports:[
    NotFoundComponent,
    LoadingComponent
  ]
})
export class ExtrapagesModule { }
