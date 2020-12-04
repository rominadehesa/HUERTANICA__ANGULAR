import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.css']
})
export class InputIntComponent implements OnInit {

  constructor() { }

  @Input()
  quantity : number;

  @Input()
  max :  number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  moreUnit(): void {
    if(this.quantity < this.max)
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  lessUnit(): void {
    if(this.quantity > 0)
     this.quantity--;
     this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
