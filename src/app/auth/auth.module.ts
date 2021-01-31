import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutes,
    SignInModule,
    SignUpModule,
    NzCardModule,
    NzButtonModule
  ],
})
export class AuthModule { }
