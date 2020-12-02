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
    nombre: 'Mixx6 - Semillas Organicas',
    precio : 120,
    imagen : 'assets/img/img.JPG',
    oferta : true,
    cantidad : 0,
    stock : 5,
  },
  {
    nombre: 'Huertero 2x2x2',
    precio : 120,
    imagen : 'assets/img/img.JPG',
    oferta : false, 
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
