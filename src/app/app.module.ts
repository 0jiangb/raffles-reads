import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AuthService } from '../services/auth.service';
import { SignInPage } from '../pages/sign-in/sign-in';

const firebaseConfig = {
  apiKey: "AIzaSyBdiBZnG71soLiaQod1hIlHhn5Azv65SKU",
  authDomain: "raffles-reads.firebaseapp.com",
  databaseURL: "https://raffles-reads.firebaseio.com",
  projectId: "raffles-reads",
  storageBucket: "raffles-reads.appspot.com",
  messagingSenderId: "547104769444"
};

@NgModule({
  declarations: [MyApp, SignInPage],
  entryComponents: [MyApp, SignInPage],
  bootstrap: [IonicApp],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxErrorsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule { }
