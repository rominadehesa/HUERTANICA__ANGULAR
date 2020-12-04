import { Component, OnInit } from '@angular/core';
import { ProductsCartService } from '../products-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products : Product[] = [
  {
    nombre: 'Plantines x6',
    precio : 220,
    imagen : 'https://i.ibb.co/2tgCwTh/img1.jpg',
    oferta : false, 
    cantidad : 0,
    stock : 5,
  },
  {
    nombre: 'Dulce Organico Sabor Durazno',
    precio : 180,
    imagen : 'https://i.ibb.co/98HHY3C/img4.jpg',
    oferta : false, 
    cantidad : 0,
    stock : 5,
  },
  {
    nombre: 'Huertero',
    precio : 120,
    imagen : 'https://i.ibb.co/C80C3dx/img2.jpg',
    oferta : true,
    cantidad : 0,
    stock : 5,
  }
];
  
  constructor( private cart : ProductsCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(product) : void {
    if(product.cantidad != 0){
      this.cart.addToCart(product);
      product.stock -= product.cantidad;
      product.cantidad = 0;
    }
    
  }

}
