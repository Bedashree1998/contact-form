import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LoginUserScreenComponent } from './screens/login-user-screen/login-user-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { AddContactScreenComponent } from './screens/add-contact-screen/add-contact-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    LoginUserScreenComponent,
    RegisterUserScreenComponent,
    AddContactScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
