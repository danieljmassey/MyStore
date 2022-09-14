import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
  };
  productID: number = 0;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.productID = +res['id'];
    });
    this.ProductService.getProducts().subscribe((res) => {
      const product = res.find((product) => product.id === this.productID);
      if (product !== undefined) {
        this.product = product;
      }
    });
  }
}
