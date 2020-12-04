import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsCartService {

  private _buyList: Product[] = [];
  buyList : BehaviorSubject<Product[]> = new BehaviorSubject([]);

  addToCart(product: Product) {
    let item = this._buyList.find((v1) => v1.nombre == product.nombre);
    if(!item) {
      this._buyList.push({...product});
    }
    else {
      item.cantidad += product.cantidad;
    }
    console.log(this._buyList);
    this.buyList.next(this._buyList);
  }

  constructor() { }
}
