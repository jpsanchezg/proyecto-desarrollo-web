import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeladosComponent } from './helados/helados.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { NavbarTiendaComponent } from './navbar-tienda/navbar-tienda.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductShopDisplayComponent } from './product-shop-display/product-shop-display.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTiendaComponent,
    HeladosComponent,
    LoginAdminComponent,
    LoginUserComponent,
    HomeComponent,
    ProductCardComponent,
    ProductShopDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
