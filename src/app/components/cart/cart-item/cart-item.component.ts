import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { cartProduct } from 'src/app/models/cartProduct';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  prodArr: cartProduct[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProdArr().subscribe((res) => {
      this.prodArr = res;
    });
    this.cartService.getTotal().subscribe((res) => {
      this.total = res;
    });
  }
}
