import { Component, ViewChild } from '@angular/core';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../services/auth.service';
import { FeedPage } from '../pages/feed/feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = FeedPage;

  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private menu: MenuController,
    private app: App,
    private auth: AuthService,
  ) { }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  signIn() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot("SignInPage");
  }

  signOut() {
    this.menu.close();
    this.auth.signOut();
  }

}

