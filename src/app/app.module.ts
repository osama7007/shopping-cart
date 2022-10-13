import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import  localeFr from '@angular/common/locales/fr';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from './shared/shared.module';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductComponent,
    NavbarComponent,
    NotFoundComponentComponent,
    AddressFormComponent,
    CartComponent,
    ProductDetailsComponent,
    LoaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
     {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptor,
        multi: true,
     },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
