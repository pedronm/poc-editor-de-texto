import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar } from "ngx-editor";
@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrls: ['./ng-rx.component.css']
})
export class NgRxComponent implements OnInit, OnDestroy{

  // Muito simples! O porém é que precisa do Angular 12
  // <li> <a routerLink="/angular-editor" >Angular Editor</a></li>
  
  
  editor: Editor | any;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];

  constructor() { }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

}
