import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuillComponent } from './core/editores/quill/quill.component';
import { FroalaComponent } from './froala/froala.component';
import { AngularEditorComponent } from './core/editores/angular-editor/angular-editor.component';
import { NgRxComponent } from './core/editores/ng-rx/ng-rx.component';

const routes = [
  {path: 'quill-editor', component: QuillComponent},
  {path: 'froala-editor', component: FroalaComponent},
  {path: 'angular-editor', component: AngularEditorComponent},
  {path: 'ngx-editor', component: NgRxComponent}
]

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
