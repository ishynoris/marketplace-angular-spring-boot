import { Component, OnInit } from '@angular/core';

import { StaticValues } from '../../../assets/js/static-values';
import { IProduct } from '../../../interfaces/IProduct';
import { ProducService } from '../../../services/ProductService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: IProduct[];

  constructor(private service: ProducService) { 
  }

  ngOnInit(){
    this.products = StaticValues.products;
  }

  addToCart(id: number){
    const product = this.products.find(p => {
      return p.id === id;
    });
    this.service.addProduct(product);
  }
}
