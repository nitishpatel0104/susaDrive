import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AddNewFolderService } from '../_services/add-new-folder.service';

@Component({
  selector: 'app-drivedashboard',
  templateUrl: './drivedashboard.component.html',
  styleUrls: ['./drivedashboard.component.scss']
})
export class DrivedashboardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  constructor( private allFolders: AddNewFolderService, private router: Router ) { }

  folders: any = [];

  ngOnInit(): void {
    this.allFolders.getAllFolders().subscribe((res)=>{
      this.folders = res;
    }, err=>{
      console.log(err);
    });
  }
  open(folder: any){
    this.router.navigate(['dashboard/documents']);
    localStorage.setItem('folderId', folder._id);
  }

}
