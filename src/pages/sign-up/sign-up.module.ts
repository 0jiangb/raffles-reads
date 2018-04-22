import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { SignUpPage } from './sign-up';

@NgModule({
  declarations: [SignUpPage],
  imports: [IonicPageModule.forChild(SignUpPage), NgxErrorsModule]
})
export class SignUpPageModule { }
