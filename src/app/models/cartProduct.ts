import { Product } from './product';

export class cartProduct {
  product: Product;
  qty: number;

  constructor() {
    this.product = new Product();
    this.qty = 0;
  }
}
