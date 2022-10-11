import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {
    path:'' , 
    component : AllProductsComponent,
  },
  {
    path:'register' , 
    component : RegisterComponent,
  },
  {
    path:'login' , 
    component : LoginComponent,
  },
  {
    path:'cart' , 
    component : CartComponent,
  },
  {
    path:'product-details' , 
    component : ProductDetailsComponent,
  },
  {
    path:"**",
    component : NotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
