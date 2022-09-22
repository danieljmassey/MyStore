import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-page/product-item/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/cart/checkout-form/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
