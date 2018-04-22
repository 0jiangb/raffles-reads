import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  feedItems: Array<Object>;

  constructor(public navCtrl: NavController) {
    this.feedItems = [{
      "header": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou",
      "shortForm": "hello",
      "imgSrc": "https://sms.math.nus.edu.sg/PrizePresentation/PhotoSMO2016/SMOJunior/content/images/large/2016_SMS_APPC_small-189.jpg",
      "type": "cywww",
      "access": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou.html"
    }];
  }

  openFull(feedItem: Object) {
    this.navCtrl.push("CywwwItemPage", {
      "feedItem": feedItem
    });
  }

}

