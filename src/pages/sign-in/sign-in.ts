import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  signInForm: FormGroup;
  signInError: string;

  constructor(public navCtrl: NavController, private auth: AuthService, fb: FormBuilder) {
    this.signInForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signIn() {
    let data = this.signInForm.value;
    if (!data.email) {
      return;
    }
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot("FeedPage"),
        error => this.signInError = error.message
      );
  }
}
