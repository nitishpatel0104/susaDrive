import { Component, OnInit } from '@angular/core';
import { DriveloginService } from './../_services/drivelogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivelogin',
  templateUrl: './drivelogin.component.html',
  styleUrls: ['./drivelogin.component.scss']
})
export class DriveloginComponent implements OnInit {
  loading: any;

  username: any;
  pass: any;

  constructor(
    private loginService: DriveloginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.adminLogin().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].username === this.username && res[i].pass === this.pass) {
          alert("Login Succesfull");
          this.router.navigate(['dashboard']);
          localStorage.setItem("adminId", res[i]._id);
        }
      }
    }, err => {
      alert("Something Went Wrong!!");
    })
  }

}
