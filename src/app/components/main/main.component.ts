import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  title = "My Marketplace";
  menuRoutes = [
    { path: "", title: "Home" },
    { path: "user", title: "Users" },
  ]
  user = "Some User";
  userOptions = [
    { path: "shopping-cart", title: "Carrinho de compras", icon: 'shopping-cart' },
    { path: "logout", title: "Sair", icon: 'sign-out-alt' },
  ]
}
