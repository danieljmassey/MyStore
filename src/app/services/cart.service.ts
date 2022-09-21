import { Injectable } from '@angular/core';
import { cartProduct } from '../models/cartProduct';
import { Order } from '../models/order';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order = new Order();
  cartChanges = new BehaviorSubject<cartProduct[]>([]);
  totalChanges = new BehaviorSubject<number>(0);

  constructor() {}
  getProdArr(): Observable<cartProduct[]> {
    return of(this.order.prodArr);
  }

  updateOrder(req: cartProduct): void {
    const found = this.order.prodArr.findIndex(
      (item) => item.product.id === req.product.id
    );
    if (found === -1) {
      this.order.prodArr.unshift(req);
    } else {
      this.order.prodArr[found].qty = req.qty;
    }
    this.getTotal();
    this.cartChanges.next(this.order.prodArr);
  }

  removeProduct(req: cartProduct): void {
    const newArr = this.order.prodArr.filter((item) => item !== req);
    this.order.prodArr = newArr;
    this.getTotal();
    this.cartChanges.next(this.order.prodArr);
  }

  getTotal() {
    let sum = this.order.prodArr.reduce((acc, obj) => {
      return acc + obj.product.price * obj.qty;
    }, 0);
    this.order.total = sum;
    this.totalChanges.next(this.order.total);
  }
}
