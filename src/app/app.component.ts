import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedFiles: any[] = [];

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    console.log(JSON.stringify({severity: 'info', summary: 'Success', detail: 'File Uploaded'}));
  }

  // TODO: implement
}
