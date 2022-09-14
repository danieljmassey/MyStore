import { Injectable, Output, EventEmitter } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order = {
    prodArr: [{ productID: 0, qty: 0 }],
    total: 0,
  };

  constructor() {}
  getProdArr(): Observable<cartProduct[]> {
    return of(this.order.prodArr);
  }

  updateOrder(req: cartProduct) {
    const found = this.order.prodArr.findIndex(
      (item) => item.productID === req.productID
    );
    if (found === -1) {
      this.order.prodArr.unshift(req);
    } else {
      this.order.prodArr[found].qty = req.qty;
    }
  }

  getTotal(): void {}
}
