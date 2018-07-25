import { Component, OnInit } from '@angular/core';
import { ProducService } from '../../../services/ProductService';
import { IProduct } from '../../../interfaces/IProduct';
import { StaticValues } from '../../../assets/js/static-values';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  private products: IProduct[]
  btnFinish = { name: 'Finish buy', type: StaticValues.ButtonType.Success, icon: 'glyphicon glyphicon-ok' };
  btnRemove = { name: 'Remove', type: StaticValues.ButtonType.Danger, icon: 'glyphicon glyphicon-trash' };
  
  constructor(private service: ProducService) { }

  ngOnInit() {
    this.service.observable.subscribe(p => this.products = p);
  }

  imgSrc(){
    return "assets/imgs/";
  }

  removeProduct(id: number){
    const removed = this.service.removeProduct(id);
    const msg = removed === undefined 
      ? "It was not possible remove this item."
      : removed.name + " was removed of shop chart";
    alert(msg);
  }
}
