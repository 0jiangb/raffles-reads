import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { SignInPage } from './sign-in';

@NgModule({
  declarations: [SignInPage],
  imports: [IonicPageModule.forChild(SignInPage), NgxErrorsModule]
})
export class SignInPageModule { }
