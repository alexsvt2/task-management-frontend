import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/singup/singup.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{ path: '', component: AuthComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}
