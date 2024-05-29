import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    TranslateModule,
    NgbDropdownModule
  ],
  exports:[NavbarComponent]
})
export class LayoutsModule { }
