import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cartProduct } from 'src/app/models/cartProduct';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Product } from 'src/app/models/product';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css'],
})
export class CheckoutItemComponent implements OnInit {
  @Input() cartProduct: cartProduct = { productID: 0, qty: 0 };

  constructor(
    private cartService: CartService,
    private prodServ: ProductServiceService
  ) {}

  ngOnInit(): void {}
}
