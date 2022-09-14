import {
  Component,
  OnInit,
  OnChanges,
  Input,
  NgModule,
  SimpleChanges,
} from '@angular/core';
import { cartProduct } from 'src/app/models/cartProduct';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css'],
})
export class CartButtonComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  possibleQty = [0, 1, 2, 3, 4, 5];
  btnQty = 0;
  cartProduct: cartProduct = { productID: 0, qty: 0 };
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  async updateOrder(): Promise<void> {
    try {
      this.cartProduct.productID = this.product.id;
      this.cartProduct.qty = this.btnQty;
      this.cartService.updateOrder(this.cartProduct);
    } catch (err) {
      throw new Error(`{$err}`);
    }
  }
}
