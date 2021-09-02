// Import Froala Editor.
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-froala',
  templateUrl: './froala.component.html',
  styleUrls: ['./froala.component.css']
})
export class FroalaComponent implements OnInit {
  // É PAGO
  
  // Nota*** : ese já não foi tão fácil de implementar
  // alem de importar e chamar no código, eu ainda tive que preparar 
  // a página pra recebê-lo

  // As configurações são passadas como inputs
  // [froalaEditor]='options'
  // https://www.froala.com/wysiwyg-editor/docs/options
  // Da pra passar eventos e métodos também
  // public options: Object = {
  //   placeholder: "Edit Me",
  //   events : {
  //     'focus' : function(e, editor) {
  //       console.log(editor.selection.get());
  //     }
  //   }
  // }
  // 
  // Da pra receber o conteúdo com two way data binding:
  // The WYSIWYG HTML editor content model.
  //
  // [(froalaModel)]="editorContent"
  //   .
  //   .
  //   .
  //   public editorContent: string = 'My Document\'s Title'
  //   .
  //   .
  //   .
  //   <input [ngModel]="editorContent"/>
  // <input [(ngModel)]="editorContent"/> <!-- For two way binding -->

  //   DA pra usar também em Forms reativos:
    
  //   <form [formGroup]="form" (ngSubmit)="onSubmit()">
  //   <textarea [froalaEditor] formControlName="formModel"></textarea>
  //   <button type="submit">Submit</button>
  // </form>

  // Se quiser usar o two-way binding pra exibir os dados do froala em outros lugares 

  //   <form [formGroup]="form" (ngSubmit)="onSubmit()">
  //   <textarea [froalaEditor] formControlName="formModel" [(froalaModel)]="form.formModel"></textarea>
  //   <div [froalaView]="form.formModel"></div>
  //   <button type="submit">Submit</button>
  // </form>

  public formulario : FormGroup = new FormGroup({})
   
  public options: Object = {
    width: 500,
    height:200,
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };

  public onSubmit(){}

  constructor() { }

  ngOnInit(): void {
   
  }

}
