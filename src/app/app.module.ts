import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavListComponent } from './components/nav-list/nav-list.component';

import { StaticValues } from '../assets/js/static-values';
import { ProductsComponent } from './components/products/products.component';
import { MyBuysComponent } from './components/my-buys/my-buys.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ButtonDropdownComponent } from './components/button-dropdown/button-dropdown.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonComponent } from './components/button/button.component';
import { ProducService } from '../services/ProductService';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MainMenuComponent,
    HeaderComponent,
    FooterComponent,
    NavListComponent,
    ProductsComponent,
    MyBuysComponent,
    ShopCartComponent,
    LogoutComponent,
    ButtonDropdownComponent,
    ProductItemComponent,
    ButtonComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(StaticValues.getRoutes())
  ],
  providers: [ProducService],
  bootstrap: [MainComponent]
})
export class AppModule { }
