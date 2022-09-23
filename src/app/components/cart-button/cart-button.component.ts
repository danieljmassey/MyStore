import { Component, OnInit, Input } from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css'],
})
export class CartButtonComponent implements OnInit {
  @Input() product: Product = new Product();
  possibleQty = [1, 2, 3, 4, 5];
  btnQty = 1;
  cartProduct: cartProduct = new cartProduct();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  async updateOrder(): Promise<void> {
    try {
      this.cartProduct.product = this.product;
      this.cartProduct.qty = this.btnQty;
      this.cartService.updateOrder(this.cartProduct);
      alert('Product(s) added to cart!');
    } catch (err) {
      throw new Error(`{$err}`);
    }
  }
}
