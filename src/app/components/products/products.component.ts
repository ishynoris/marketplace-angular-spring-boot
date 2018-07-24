import { Component, OnInit } from '@angular/core';
import { StaticValues } from '../../../assets/js/static-values';
import { IProduct } from '../../../interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: IProduct[];

  constructor() { }

  ngOnInit(){
    this.products = StaticValues.products;
  }
}
