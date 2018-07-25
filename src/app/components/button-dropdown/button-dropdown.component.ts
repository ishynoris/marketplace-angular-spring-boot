import { Component, Input } from '@angular/core';

import { INavListItem } from '../../../interfaces/INavListItem';
import { StaticValues } from '../../../assets/js/static-values';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.css']
})
export class ButtonDropdownComponent {
  
  @Input() type: number;
  @Input() text: string;
  @Input() icon: string;
  @Input() textColored: string | undefined;
  @Input() itensList: INavListItem[];

  constructor() { }
  
  getButtonType(): string {
    return StaticValues.getButtonType(this.type);
  }
}
