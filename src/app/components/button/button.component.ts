import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StaticValues } from '../../../assets/js/static-values';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() type: number;
  @Input() icon: string;
  @Input() text: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  onClicked(){
    if (this.onClick !== undefined){
      this.onClick.emit();
    }
  }

  getButtonType(): string{
    return StaticValues.getButtonType(this.type);
  }
}
