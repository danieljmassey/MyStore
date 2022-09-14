import { cartProduct } from './cartProduct';
export class Order {
  prodArr: cartProduct[];
  total: number;

  constructor() {
    (this.prodArr = []), (this.total = 0);
  }
}
