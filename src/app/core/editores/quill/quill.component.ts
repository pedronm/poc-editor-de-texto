import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  // A configuração pode ser direto no import 
  // do móduo lá na AppModule
  // ou elas podem ser direto no componente:
  //   <quill-editor>
  //   <div quill-editor-toolbar>
  //     <span class="ql-formats">
  //       <button class="ql-bold" [title]="'Bold'"></button>
  //     </span>
  //     <span class="ql-formats">
  //       <select class="ql-align" [title]="'Aligment'">
  //         <option selected></option>
  //         <option value="center"></option>
  //         <option value="right"></option>
  //         <option value="justify"></option>
  //       </select>
  //       <select class="ql-align" [title]="'Aligment2'">
  //         <option selected></option>
  //         <option value="center"></option>
  //         <option value="right"></option>
  //         <option value="justify"></option>
  //       </select>
  //     </span>
  //   </div>
  // </quill-editor>
  // 
  // Como recomendação dos próprios devs: 
  //  "Não faça muita mágica do angular aqui, como um listener de um (output)
  //   use listeners nativos"
  // https://github.com/KillerCodeMonkey/ngx-quill#for-standard-webpack-angular-cli-and-tsc-builds
  constructor() { }

  ngOnInit(): void {
  }

}
