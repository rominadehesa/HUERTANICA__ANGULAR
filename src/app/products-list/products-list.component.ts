import { Component, OnInit } from '@angular/core';
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
    imagen : 'assets/img/img1.jpg',
    oferta : false, 
    cantidad : 0,
    stock : 5,
  },
  {
    nombre: 'Dulce Organico Sabor Durazno',
    precio : 180,
    imagen : 'assets/img/img4.jpg',
    oferta : false, 
    cantidad : 0,
    stock : 5,
  },
  {
    nombre: 'Huertero',
    precio : 120,
    imagen : 'assets/img/img2.jpg',
    oferta : true,
    cantidad : 0,
    stock : 5,
  }
];
  constructor() { }

  ngOnInit(): void {
  }

  moreUnit(p : Product): void {
    if(p.cantidad < p.stock)
    p.cantidad++;
  }

  lessUnit(p : Product): void {
    if(p.cantidad > 0)
    p.cantidad--;
  }

}
