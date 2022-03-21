import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeladosComponent } from './helados/helados.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PurchaseSuccessComponent } from './purchase-success/purchase-success.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserInvoicesComponent } from './user-invoices/user-invoices.component';
import { ModuserComponent } from './moduser/moduser.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModProductComponent } from './mod-product/mod-product.component';
import { ModProductDetailComponent } from './mod-product-detail/mod-product-detail.component';
import { DeleteProductDetailComponent } from './delete-product-detail/delete-product-detail.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tienda', component: HeladosComponent},
  { path: 'tienda/:id', component: ProductDetailComponent},
  { path: 'login', component: LoginUserComponent, data:{navbar:false}},
  { path: 'contacto', component: ContactoComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'finalizar', component: PurchaseSuccessComponent},
  { path: 'carrito', component: ShoppingCartComponent},
  { path: 'facturas', component: UserInvoicesComponent},
  { path: 'modificarperfil', component: ModuserComponent},
  { path: 'agregar-producto' , component: AddProductComponent },
  { path: 'borrar-producto', component: DeleteProductComponent},
  { path: 'borrar-producto/:id', component: DeleteProductDetailComponent},
  { path: 'modificar-producto', component: ModProductComponent},
  {path:'modificar-producto/:id', component: ModProductDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
