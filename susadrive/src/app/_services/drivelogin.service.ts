import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriveloginService {

  constructor(private http: HttpClient) { }

  adminLogin() {
    return this.http.get<any>("https://e-sign-document.herokuapp.com/admin/getAll");
  }

}
