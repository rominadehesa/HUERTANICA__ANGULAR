import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductsCartService } from '../products-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  list$ : Observable<Product[]>;

  constructor(private cart : ProductsCartService) { 
    this.list$ = cart.buyList.asObservable();
  }
  ngOnInit(): void {
  }

}
