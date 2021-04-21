import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import{NavComponent} from './nav/nav.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SignInComponent} from './sign-in/sign-in.component';
import{SignUpComponent} from './sign-up/sign-up.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'category/:id', component: CategoryComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'nav' , component: NavComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
