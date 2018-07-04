import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  resetPassword: boolean = false; 
  signInForm: FormGroup;
  signInError: string;

  constructor(public navCtrl: NavController,
    private auth: AuthService,
    fb: FormBuilder,
    private storage: Storage,
    private menu: MenuController) {
    this.signInForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }

  ionViewWillLeave() {
    // Don't forget to return the swipe to normal, otherwise
    // the rest of the pages won't be able to swipe to open menu
    this.menu.swipeEnable(true);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
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

  signUp() {
    this.navCtrl.push("SignUpPage");
  }

  startApp() {
    this.navCtrl.setRoot("SignInPage").then(() => {
      this.storage.set('hasSignedIn', 'true');
    });
  }

  sendResetEmail() {
    this.auth.resetPassword(this.signInForm.value.email)
      .then(() => this.resetPassword = true)
      .catch(error => {
       console.log(error);
      })
  }
}
