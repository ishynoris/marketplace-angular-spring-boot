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

    removeProduct(id: number): IProduct | undefined {
        let removed = undefined
        this.behavior.getValue().forEach((p, i, arr) =>{
            if (p.id === id) {
                removed = arr.splice(i, 1)[0];
            }
        })
        return removed;
    }
}