import { Component, Input, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css'],
})
export class CheckoutItemComponent implements OnInit {
  @Input() cartProduct: cartProduct = new cartProduct();

  constructor() {}

  ngOnInit(): void {}
}
