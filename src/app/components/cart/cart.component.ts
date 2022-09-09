import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  order: Order = new Order();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.order = this.cartService.getOrder();
  }
}
