import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  ccNum: string = '';
  isValid: Boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigateByUrl('/confirmation');
  }
  validateCC(): void {
    const numbers = /^[0-9]+$/;
    const res = this.ccNum.replace(/,/g, '');
    if (res.match(numbers)) {
      this.isValid = false;
    } else {
      alert('Invalid Entry: Please enter a valid Credit Card number');
    }
  }
}
