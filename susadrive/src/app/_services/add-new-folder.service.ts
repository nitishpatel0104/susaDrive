import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddNewFolderService {

  constructor(private http: HttpClient) { }

  postnewfolder(body: any){
    // return this.http.post("https://e-sign-document.herokuapp.com/allfolders/post", body);
    return this.http.post("http://localhost:4000/allFolders/post", body);
  }

  getAllFolders(){
    return this.http.get("http://localhost:4000/allFolders/getAll");
  }


}
