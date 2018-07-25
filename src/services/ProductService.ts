import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/IProduct';

@Injectable()
export class ProducService {

    private behavior = new BehaviorSubject([]);
    observable = this.behavior.asObservable();

    constructor(){ }

    addProduct(product: IProduct) {
        this.behavior.getValue().push(product);
    }

    removeProduct(id: number){
        this.behavior.getValue().forEach((p, i, arr) =>{
            if (p.id === id) {
                arr.splice(i, 1);
            }
        })
    }
}