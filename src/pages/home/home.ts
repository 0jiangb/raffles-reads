import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { FeedItemPage } from '../feed-item/feed-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  feedItems: Array<Object>;

  constructor(public navCtrl: NavController) {
    this.feedItems = [
      {
        "header": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou",
        "shortForm": "hello2",
        "imgSrc": "https://sms.math.nus.edu.sg/PrizePresentation/PhotoSMO2016/SMOJunior/content/images/large/2016_SMS_APPC_small-189.jpg",
        "type": "cywww",
        "access": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou.html"
      }
    ];
  }

  openFull(feedItem: Object) {
    this.navCtrl.push(FeedItemPage, {"feedItem" : feedItem})
  }
}
