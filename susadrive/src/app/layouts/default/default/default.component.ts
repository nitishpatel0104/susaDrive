import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideNavOpen = true;

  constructor() { }

  ngOnInit() { }


  sideNavToggler() {
    this.sideNavOpen = !this.sideNavOpen;
  }

}
