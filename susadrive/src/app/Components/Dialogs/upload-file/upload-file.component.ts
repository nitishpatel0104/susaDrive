import { Component, OnInit } from '@angular/core';
import { UploadDocumentService } from 'src/app/_services/upload-document.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  file!: FormData;

  constructor(private uploadDocument: UploadDocumentService) { }

  ngOnInit(): void {
  }

  uploadFile(){
    this.uploadDocument.uploadDocument(this.file).subscribe((res)=>{
      alert("File Uploaded Successfully");
    },(err)=>{
      alert("File not uploaded");
      console.log(err);
    });
  }

  // fileName = '';

  // onFileSelected(event: any) {

  //   const file: File = event.target.files[0];

  //   if (file) {

  //     this.fileName = file.name;

  //     const formData = new FormData();

  //     formData.append("thumbnail", file);

  //     const upload$ = this.uploadDocument.uploadDocument(formData);

  //     upload$.subscribe();

  //   }
  // }
}
