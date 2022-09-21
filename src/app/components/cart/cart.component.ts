import { Component, OnInit } from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  prodArr: cartProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartChanges.subscribe((res) => (this.prodArr = res));
  }

  removeFromCart(toRemove: cartProduct): void {
    this.cartService.removeProduct(toRemove);
  }
}
