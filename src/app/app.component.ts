import { Component, ViewChild, OnInit } from '@angular/core';
import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { PaginationService } from '../services/pagination.service';
import { AuthService } from '../services/auth.service';
import { FeedPage } from '../pages/feed/feed';
import { NewsPage } from '../pages/news/news';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { PreferencesPage } from '../pages/preferences/preferences';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'Feed', name: 'TabsPage', component: FeedPage, index: 0, icon: 'albums' },
    { title: 'News', name: 'TabsPage', component: NewsPage, index: 1, icon: 'globe' },
    { title: 'Preferences', name: 'PreferencesPage', component: PreferencesPage, index: 2, icon: 'settings'}
  ];

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

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }

}
