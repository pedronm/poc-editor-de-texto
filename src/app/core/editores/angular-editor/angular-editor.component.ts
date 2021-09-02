import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-editor',
  templateUrl: './angular-editor.component.html',
  styleUrls: ['./angular-editor.component.css']
})
export class AngularEditorComponent implements OnInit {

  // acho que esse é o mais simpels; a maior parte do uso se da como um componente normal
  // https://github.com/kolkov/angular-editor

  public htmlContent: any
  public config = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
  }
  //   customClasses: [
  //     {
  //       name: "quote",
  //       class: "quote",
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: "titleText",
  //       class: "titleText",
  //       tag: "h1",
  //     },
  //   ]
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
