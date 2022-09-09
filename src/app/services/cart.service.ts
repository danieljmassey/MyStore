import { Injectable, Output, EventEmitter } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order = new Order();
  prodUpdate: cartProduct[] = [{ productID: 1, qty: 4 }];
  testProdArr: Product[] = [];
  arrayLength: number = 0;

  constructor() {}

  getOrder(): Order {
    this.order.prodArr = [
      { productID: 1, qty: 4 },
      { productID: 3, qty: 1 },
    ];
    return this.order;
  }
  getOrderLength(): number {
    this.arrayLength = this.order.prodArr.length;
    return this.arrayLength;
  }

  updateOrder(req: cartProduct) {}

  getTotal(): void {}
}
