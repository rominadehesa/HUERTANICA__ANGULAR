import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuertanicaProductsComponent } from './huertanica-products/huertanica-products.component';
import { HuertanicaHomeComponent } from './huertanica-home/huertanica-home.component';
import { HuertanicaContactComponent } from './huertanica-contact/huertanica-contact.component';

const routes: Routes = [
  {
    path: '',
    component : HuertanicaProductsComponent
  },
  {
    path: 'products',
    component : HuertanicaProductsComponent
  },
  {
    path: 'home',
    component : HuertanicaHomeComponent
  },
  {
    path : 'contact',
    component : HuertanicaContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
