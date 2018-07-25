import { Component, OnInit } from '@angular/core';
import { ProducService } from '../../../services/ProductService';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  private products: IProduct[]
  constructor(private service: ProducService) { }

  ngOnInit() {
    this.service.observable.subscribe(p => this.products = p);
  }

  imgSrc(){
    return "assets/imgs/";
  }
}
