import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPopupComponent } from './components/card/form-popup/form-popup.component';
import { TranslateModule } from '@ngx-translate/core';
import { PostCardComponent } from './components/card/post-card/post-card.component';

@NgModule({
  declarations: [
    CardComponent,
    FormPopupComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[CardComponent,FormsModule,ReactiveFormsModule,FormPopupComponent,TranslateModule,PostCardComponent]
})
export class SharedModule { }
