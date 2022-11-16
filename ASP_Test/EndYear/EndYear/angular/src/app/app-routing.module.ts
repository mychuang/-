import { UpperComponent } from './menbers/upper/upper.component';
import { ModalComponent } from './menbers/modal/modal.component';
import { ContentComponent } from './menbers/content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'upper', component: UpperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
