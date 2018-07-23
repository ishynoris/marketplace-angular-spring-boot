import { Component } from '@angular/core';

import { INavListItem } from '../../../interfaces/INavListItem';
import { StaticValues } from '../../../assets/js/static-values';

const paths = StaticValues.paths;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = "My Marketplace";
  menuRoutes: INavListItem[] = [
    { text: paths.home.item.text, path: paths.home.route.path },
    { text: paths.myShopping.item.text, path: paths.myShopping.route.path },
    { text: paths.products.item.text, path: paths.products.route.path },
  ]
  user = "Some User";
  userOptions: INavListItem[] = [
    { text: paths.shopCart.item.text, path: paths.shopCart.route.path, icon: paths.shopCart.item.icon },
    { text: paths.logout.item.text, path: paths.logout.route.path, icon: paths.logout.item.icon },
  ]
}
