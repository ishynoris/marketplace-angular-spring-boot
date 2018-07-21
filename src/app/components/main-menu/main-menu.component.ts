import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent  {

  @Input() title: string;
  @Input() routes: Array<{ path: string, title: string }>
  constructor() { }
}
