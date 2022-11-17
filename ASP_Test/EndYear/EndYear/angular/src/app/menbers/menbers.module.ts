import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperComponent } from './upper/upper.component';
import { ContentComponent } from './content/content.component';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    UpperComponent,
    ContentComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule
  ]
})
export class MenbersModule { }
