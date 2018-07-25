import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: IProduct
  @Output() onAddCart = new EventEmitter<number>();
  constructor() { }

  addToCart(id: number){
    this.onAddCart.emit(id);
  }

  imgSrc(){
    return "assets/imgs/" + this.product.img;
  }
}
