import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductShoppingComponent } from './components/product-shopping/product-shopping.component';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HelpsComponent } from './components/helps/helps.component';

import { PanelAdministradorComponent } from './components/administrador/panel-administrator/panel-administrador.component';
import { ProductosComponent } from './components/administrador/productos/productos.component';
import { AdministratorComponent } from './components/administrador/administrator/administrator.component';
import { VentasComponent } from './components/administrador/ventas/ventas.component';
import { UserPurchasesComponent } from './components/user-purchases/user-purchases.component';
import { CartComponent } from './components/cart/cart.component';
import { PublicationsListComponent } from './components/administrador/publications-list/publications-list.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { roleGuard } from './utils/role.guard';
import { loginGuard } from './utils/login.guard';
import { currentUserGuard } from './utils/current-user.guard';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { FormularioRegistroComponent } from './components/administrador/productos/form-register/formulario-registro.component';
import { FormBrandComponent } from './components/administrador/productos/form-brand/form-brand.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', 
    canActivate:[loginGuard],
    component: LoginComponent },
  { path: 'signin', 
    canActivate:[loginGuard],
    component: SignInComponent },


  { path: 'admin' ,
    canActivate:[roleGuard],
    component:PanelAdministradorComponent
  },
  { path: 'admin/products',
    canActivate:[roleGuard], 
    component: ProductosComponent 
  },
  { path: 'admin/customers', 
    canActivate:[roleGuard],
    component: AdministratorComponent 
  },
  { path: 'admin/sales',
    canActivate:[roleGuard], 
    component: VentasComponent 
  },
  { path: 'admin/publications/:id',
    canActivate:[roleGuard,currentUserGuard], 
    component: PublicationsListComponent 
  },
  {
    path:'admin/products/newProduct',
    canActivate:[roleGuard],
    component: FormularioRegistroComponent
  },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/all-products', component: AllProductsComponent },
  { path: 'dashboard/helps', component: HelpsComponent },
  { path: 'dashboard/products-search/:name', component: ProductInformationComponent },
  { path: 'dashboard/shopping/:id', component: ProductShoppingComponent },
  { path: 'dashboard/user-purchases/:idUser', component: UserPurchasesComponent },
  { path: 'dashboard/user-profile/:dni', component: UserProfileComponent },
  { path: 'dashboard/cart', component: CartComponent },
  { path: 'dashboard/purchase', component: PurchaseComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



