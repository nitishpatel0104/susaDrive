import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentdashboard',
  templateUrl: './documentdashboard.component.html',
  styleUrls: ['./documentdashboard.component.scss']
})
export class DocumentdashboardComponent implements OnInit {

  rightPanelStyle: any = {};

  constructor() { }

  ngOnInit(): void {
    this.closeContextMenu();
  }
  rightClicked($event: MouseEvent){
    if($event.which === 3){
      this.rightPanelStyle = {
        'display': 'block',
        'position': 'absolute',
        'left.px': $event.clientX,
        'top.px': $event.clientY
      };
    }
  }

  closeContextMenu(){
    this.rightPanelStyle = {
      'display': 'none'
    };
  }

}
