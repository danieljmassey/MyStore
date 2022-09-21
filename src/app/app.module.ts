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
import { CheckoutItemComponent } from './components/cart/checkout-item/checkout-item.component';
import { FormsModule } from '@angular/forms';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { TotalComponent } from './components/cart/total/total.component';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    NavBarComponent,
    CartComponent,
    ProductItemDetailComponent,
    CartButtonComponent,
    TotalComponent,
    CheckoutFormComponent,
    CheckoutItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
