import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HuertanicaProductsComponent } from './huertanica-products/huertanica-products.component';
import { AppRoutingModule } from './app-routing.module';
import { HuertanicaContactComponent } from './huertanica-contact/huertanica-contact.component';
import { HuertanicaHomeComponent } from './huertanica-home/huertanica-home.component';
import { HuertanicaWorkshopsComponent } from './huertanica-workshops/huertanica-workshops.component';
import { InputIntComponent } from './input-int/input-int.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    HuertanicaProductsComponent,
    HuertanicaContactComponent,
    HuertanicaHomeComponent,
    HuertanicaWorkshopsComponent,
    InputIntComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
