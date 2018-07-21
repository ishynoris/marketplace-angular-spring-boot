import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() user: string;
  @Input() options: Array<{ path: string, title: string, icon?: string }>
  constructor() { }
}
