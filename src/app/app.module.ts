import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FeedPage } from '../pages/feed/feed';
import { FeedItemPage } from '../pages/feed-item/feed-item';

import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyBdiBZnG71soLiaQod1hIlHhn5Azv65SKU",
  authDomain: "raffles-reads.firebaseapp.com",
  databaseURL: "https://raffles-reads.firebaseio.com",
  projectId: "raffles-reads",
  storageBucket: "raffles-reads.appspot.com",
  messagingSenderId: "547104769444"
};

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    FeedItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    FeedItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
