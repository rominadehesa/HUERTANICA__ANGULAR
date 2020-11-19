import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  product = {
    "nombre" : "Mixx6 - Semillas Organicas",
    "precio" : 125,
    "imagen" : "assets/img/img.JPG"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
