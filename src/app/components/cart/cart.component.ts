import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
