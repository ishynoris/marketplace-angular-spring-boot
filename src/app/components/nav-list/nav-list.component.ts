import { Component, Input } from '@angular/core';
import { INavListItem } from '../../../interfaces/INavListItem';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {

  @Input() list: INavListItem[];
  @Input() textColored: boolean;
  constructor() { }

}
