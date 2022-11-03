import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentService {

  constructor(private http: HttpClient) { }

  uploadDocument(file: FormData) {
    return this.http.post("http://localhost:4000/fileUpload/addFiles", file)
  }
}
