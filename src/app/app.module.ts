import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewprouctsComponent } from './viewproucts/viewproucts.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserprodsearchComponent } from './userprodsearch/userprodsearch.component';


const myRoute:Routes=[
  {path:"",
  component:AdminLoginComponent},
  
  {path:"userreg",
  component:UserRegistrationComponent},

  {path:"addproduct",
  component:AddProductComponent},

  {path:"viewproduct",
  component:ViewprouctsComponent},

  {path:"searchproduct",
  component:SearchProductComponent},

  {path:"userlogin",
  component:UserloginComponent},
  {path:"userhome",
  component:UserhomeComponent},
  {path:"prodsearch",
  component:UserprodsearchComponent}
  



]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    AddProductComponent,
    ViewprouctsComponent,
    AdminNavComponent,
    SearchProductComponent,
    UserloginComponent,
    UserhomeComponent,
    UsernavComponent,
    UserprodsearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
