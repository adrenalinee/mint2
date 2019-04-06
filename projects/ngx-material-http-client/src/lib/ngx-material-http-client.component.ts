import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-material-http-client',
  templateUrl: './ngx-material-http-client.component.html',
  styleUrls: [
    './ngx-material-http-client.component.css'
  ]
})
export class NgxMaterialHttpClientComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit() {
  }

}
