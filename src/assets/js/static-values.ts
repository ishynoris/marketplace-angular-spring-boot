import { Route } from '@angular/router';

import { HomeComponent } from '../../app/components/home/home.component';
import { ProductsComponent } from '../../app/components/products/products.component';
import { MyBuysComponent } from '../../app/components/my-buys/my-buys.component';
import { ShopCartComponent } from '../../app/components/shop-cart/shop-cart.component';
import { LogoutComponent } from '../../app/components/logout/logout.component';

export class StaticValues {
    public static paths = {
        home: { 
            item: { text: "Home" }, 
            route: { path: "", component: HomeComponent } 
        },
        myShopping: {
            item: { text: "My Shopping" },
            route: { path: "my-shopping", component: MyBuysComponent }
        },
        products: {
            item: { text: "Products" },
            route: { path: "products", component: ProductsComponent },
        },
        shopCart: {
            item: { text: "Carrinho de compras", icon: "fas fa-shopping-cart" },
            route: { path: "shop-cart", component: ShopCartComponent },
        },
        logout: {
            item: { text: "Logout", icon: "fas fa-sign-out-alt" },
            route: { path: "logout", component: LogoutComponent },
        }
    }

    public static getRoutes(): Route[] {
        return [
            StaticValues.paths.home.route,
            StaticValues.paths.myShopping.route,
            StaticValues.paths.products.route,
            StaticValues.paths.shopCart.route,
            StaticValues.paths.logout.route,
        ];
    }
}