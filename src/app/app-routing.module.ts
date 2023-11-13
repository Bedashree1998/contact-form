import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AddContactScreenComponent } from './screens/add-contact-screen/add-contact-screen.component';
import { RegisterUserScreenComponent } from './screens/register-user-screen/register-user-screen.component';
import { LoginUserScreenComponent } from './screens/login-user-screen/login-user-screen.component';

const routes: Routes = [{
  // /
  path: "",
  component: HomeScreenComponent
},
{
  // /admin/add-album
  path: "admin/add-contact",
  component: AddContactScreenComponent
},
{
  path: "user/register",
  component: RegisterUserScreenComponent
},
{
  path: "user/login",
  component: LoginUserScreenComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
