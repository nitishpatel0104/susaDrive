import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddnewfolderComponent } from '../Dialogs/addnewfolder/addnewfolder.component';
import { UploadFileComponent } from '../Dialogs/upload-file/upload-file.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  name!: string;
  newname!: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(){
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddnewfolderComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogFile(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UploadFileComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
