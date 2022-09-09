import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductItemComponent } from './components/product-page/product-item/product-item.component';
import { ProductServiceService } from './services/product-service.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductItemDetailComponent } from './components/product-page/product-item/product-item-detail/product-item-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutItemComponent } from './components/cart/cart-item/checkout-item/checkout-item.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
