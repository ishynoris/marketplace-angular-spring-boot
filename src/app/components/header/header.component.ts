import { Component, Input } from '@angular/core';
import { INavListItem } from '../../../interfaces/INavListItem';
import { ButtonDropdownComponent } from '../button-dropdown/button-dropdown.component';
import { StaticValues } from '../../../assets/js/static-values';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() user: string;
  @Input() options: INavListItem[];
  type = StaticValues.ButtonType.Danger;
  constructor() { }
}
