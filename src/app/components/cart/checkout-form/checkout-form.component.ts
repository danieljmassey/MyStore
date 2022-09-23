import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  name: string = '';
  validName: Boolean = true;
  email: string = '';
  validEmail: Boolean = true;
  ccNum: string = '';
  validCC: Boolean = false;
  isValid: Boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.isValid = this.validName && this.validEmail && this.validCC;
    if (this.isValid) {
      this.router.navigateByUrl('/confirmation');
    }
  }

  validateCC(): void {
    const numbers = /^[0-9]+$/;
    const res = this.ccNum.replace(/,/g, '');
    if (res.match(numbers)) {
      this.validCC = true;
    } else {
      alert('Invalid Entry: Please enter a valid Credit Card number');
    }
  }

  validateName(): void {
    const numbers = /^[0-9]+$/;
    const res = this.name.replace(/,/g, '');
    if (res.match(numbers)) {
      this.validName = false;
      alert('Invalid Entry: Please enter a valid Name');
    }
  }

  validateEmail(): void {
    const toMatch: any =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = this.email.toLowerCase();
    if (!res.match(toMatch)) {
      this.validEmail = false;
      alert('Invalid Entry: Please enter a valid email address');
    }
  }
}
