import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperComponent } from './upper/upper.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    UpperComponent,
    ContentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenbersModule { }
