import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterdialogComponent } from '../Dialogs/filterdialog/filterdialog.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  
  openDialog() {
    const dialogRef = this.dialog.open(FilterdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
