import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css']
})
export class NgRxComponent implements OnInit, OnDestroy{

  // Muito simples! O porém é que precisa do Angular 12
  // <li> <a routerLink="/angular-editor" >Angular Editor</a></li>
  
  public editor: Editor | any; 
  public html= '';

  constructor() { }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

}
