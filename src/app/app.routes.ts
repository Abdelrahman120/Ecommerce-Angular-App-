import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingComponent } from './shopping/shopping.component';


export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title:'All Products Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title:'Login Page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title:'Register Page'
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    title:'Shopping Page'
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent,
    title:'Product Details Page'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title:'Not Found Page'
  },
];
