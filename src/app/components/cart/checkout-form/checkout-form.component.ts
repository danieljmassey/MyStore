import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  ccNum: string = '';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(`Order Placed for ${this.name}`);
  }
}
