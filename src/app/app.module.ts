import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LoginUserScreenComponent } from './screens/login-user-screen/login-user-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { AddContactScreenComponent } from './screens/add-contact-screen/add-contact-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextControlComponent } from './form/text-control/text-control.component'

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    LoginUserScreenComponent,
    RegisterUserScreenComponent,
    AddContactScreenComponent,
    HomeScreenComponent,
    TextControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
