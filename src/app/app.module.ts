import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill'; 
import { AppComponent } from './app.component';
import { QuillComponent } from './core/editores/quill/quill.component';
import { AppRoutingModule } from './app-routing.module';
import { FroalaComponent } from './froala/froala.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorComponent } from './core/editores/angular-editor/angular-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgRxComponent } from './core/editores/ng-rx/ng-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    QuillComponent,
    FroalaComponent,
    AngularEditorComponent,
    NgRxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AngularEditorModule,
    NgxEditorModule,
    QuillModule.forRoot( ),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
