import { Component } from '@angular/core';
import { INavListItem } from '../../../interfaces/INavListItem'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = "My Marketplace";
  menuRoutes: INavListItem[] = [
    { path: "", text: "Home" },
    { path: "my-shopping", text: "My shopping" },
    { path: "products", text: "Products" },
  ]
  user = "Some User";
  userOptions: INavListItem[] = [
    { path: "shopping-cart", text: "Carrinho de compras", icon: 'fas fa-shopping-cart' },
    { path: "logout", text: "Sair", icon: 'fas fa-sign-out-alt' },
  ]
}
