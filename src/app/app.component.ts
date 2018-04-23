import { Component, ViewChild } from '@angular/core';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { AuthService } from '../services/auth.service';
import { FeedPage } from '../pages/feed/feed';
import { TutorialPage } from '../pages/tutorial/tutorial';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private menu: MenuController,
    private app: App,
    private auth: AuthService,
    private storage: Storage
  ) {
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = FeedPage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.initializeApp();
      });
  }

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

  openTutorial() {
    this.nav.setRoot("TutorialPage");
  }

}
