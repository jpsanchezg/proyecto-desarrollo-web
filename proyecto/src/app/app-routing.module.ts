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



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'tienda', component: HeladosComponent},
  { path: 'tienda/:id', component: ProductDetailComponent},
  { path: 'login', component: LoginUserComponent, data:{navbar:false}},
  { path: 'contacto', component: ContactoComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'finalizar', component: PurchaseSuccessComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
