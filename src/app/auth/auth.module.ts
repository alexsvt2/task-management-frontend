import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
