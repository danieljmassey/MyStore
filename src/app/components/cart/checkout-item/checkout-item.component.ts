import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css'],
})
export class CheckoutItemComponent implements OnInit {
  @Input() cartProduct: cartProduct = new cartProduct();
  @Output() toRemove: EventEmitter<cartProduct> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeProduct(): void {
    this.toRemove.emit(this.cartProduct);
    alert('Removed from Cart');
  }
}
