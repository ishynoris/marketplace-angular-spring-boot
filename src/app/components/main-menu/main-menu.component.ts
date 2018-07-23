import { Component, OnInit, Input } from '@angular/core';
import { INavListItem } from '../../../interfaces/INavListItem';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent  {

  @Input() title: string;
  @Input() routes: INavListItem[];
  constructor() { }
}
