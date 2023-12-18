import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
