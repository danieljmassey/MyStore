import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductItemComponent } from './components/product-page/product-item/product-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductItemDetailComponent } from './components/product-page/product-item/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutItemComponent } from './components/cart/cart-item/checkout-item/checkout-item.component';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { TotalComponent } from './components/cart/cart-item/total/total.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    NavBarComponent,
    ProductItemDetailComponent,
    CartComponent,
    CartItemComponent,
    CheckoutItemComponent,
    CheckoutFormComponent,
    CartButtonComponent,
    TotalComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
