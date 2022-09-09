import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
