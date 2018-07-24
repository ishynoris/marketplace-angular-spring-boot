import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: IProduct
  
  constructor() { }

  imgSrc(){
    return "assets/imgs/" + this.product.img;
  }
}
