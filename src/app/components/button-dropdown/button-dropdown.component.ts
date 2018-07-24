import { Component, Input } from '@angular/core';

import { INavListItem } from '../../../interfaces/INavListItem';

enum ButtonType { Primary, Secondary, Success, Danger, Warning, Info, Dark }

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.css']
})
export class ButtonDropdownComponent {

  public static ButtonType = ButtonType;
  
  @Input() type: number;
  @Input() text: string;
  @Input() icon: string;
  @Input() textColored: string | undefined;
  @Input() itensList: INavListItem[];

  constructor() { }
  
  getButtonType(): string {
    return "btn-" + (
      this.type === ButtonType.Primary ? "primary" :
      this.type === ButtonType.Secondary ? "secondary" :
      this.type === ButtonType.Success ? "success" :
      this.type === ButtonType.Danger ? "danger" :
      this.type === ButtonType.Warning ? "warning" :
      this.type === ButtonType.Info ? "info" :
      this.type === ButtonType.Dark ? "dark" : "light"
    );
  }
}
