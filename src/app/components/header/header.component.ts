import { Component, Input } from '@angular/core';
import { INavListItem } from '../../../interfaces/INavListItem';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() user: string;
  @Input() options: INavListItem[]
  constructor() { }
}
