import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeladosComponent } from './helados/helados.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { NavbarTiendaComponent } from './navbar-tienda/navbar-tienda.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductShopDisplayComponent } from './product-shop-display/product-shop-display.component';
import { PurchaseSuccessComponent } from './purchase-success/purchase-success.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTiendaComponent,
    HeladosComponent,
    LoginUserComponent,
    HomeComponent,
    ProductCardComponent,
    ProductShopDisplayComponent,
    PurchaseSuccessComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    UserInvoicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
