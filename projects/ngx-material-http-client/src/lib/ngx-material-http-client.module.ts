import { NgModule } from '@angular/core';
import { NgxMaterialHttpClientComponent } from './ngx-material-http-client.component';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

@NgModule({
  declarations: [
    NgxMaterialHttpClientComponent
  ],
  imports: [
    FormsModule,
    MonacoEditorModule
  ],
  exports: [
    NgxMaterialHttpClientComponent
  ]
})
export class NgxMaterialHttpClientModule { }
