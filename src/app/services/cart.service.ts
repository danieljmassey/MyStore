import { Injectable, Output, EventEmitter } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order = new Order();
  products: Product[] = [];

  constructor() {}
  getProdArr(): Observable<cartProduct[]> {
    return of(this.order.prodArr);
  }

  updateOrder(req: cartProduct) {
    const found = this.order.prodArr.findIndex(
      (item) => item.product.id === req.product.id
    );
    if (found === -1) {
      this.order.prodArr.unshift(req);
    } else {
      this.order.prodArr[found].qty = req.qty;
    }
  }
  //   const updatedOrder = this.order.prodArr.map((item) => {
  //     if (item.product.id === req.product.id) {
  //       item.qty = req.qty;
  //     }

  //     return item;
  //   });

  //   this.order.prodArr = updatedOrder;
  // }

  getTotal(): void {}
}
