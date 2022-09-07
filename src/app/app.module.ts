import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductServiceService } from './services/product-service.service';
import { CartComponent } from './components/cart/cart.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageComponent,
    ProductItemComponent,
    CartComponent,
    NavBarComponent,
    ProductItemDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
