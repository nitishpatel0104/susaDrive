import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddNewFolderService } from 'src/app/_services/add-new-folder.service';

@Component({
  selector: 'app-addnewfolder',
  templateUrl: './addnewfolder.component.html',
  styleUrls: ['./addnewfolder.component.scss']
})
export class AddnewfolderComponent implements OnInit {

  name: any

  constructor(private allfolders: AddNewFolderService, private router: Router)
    { }

  ngOnInit(): void {
  }

  folderSave(){
    const body = {
      adminId: localStorage.getItem("adminId"),
      folderName: this.name
    };
    console.log(localStorage.getItem("adminId"));
    this.allfolders.postnewfolder(body).subscribe((res)=>{
      alert("Folder Added Successfully");
    },err=>{
      alert("Something went wrong");
      console.log(err);
    })
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
