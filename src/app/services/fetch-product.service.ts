import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductServiceService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class FetchProductService {
  products: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  constructor(private productService: ProductServiceService) {}

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  fetchProduct(productID: number): Product {
    this.getProducts();
    const Jim = this.products.find((item) => productID === item.id);
    if (Jim) {
      return Jim;
    } else {
      return this.product;
    }
  }
}
