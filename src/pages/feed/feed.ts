import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { PaginationService } from '../../services/pagination.service';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  feedItems: Array<Object>;
  items = [];

  constructor(
    public navCtrl: NavController,
    public page: PaginationService
  ) {
    //this.feedItems =

    //[{
    //  "header": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou",
    //  "shortForm": "hello",
    //  "imgSrc": "https://sms.math.nus.edu.sg/PrizePresentation/PhotoSMO2016/SMOJunior/content/images/large/2016_SMS_APPC_small-189.jpg",
    //  "type": "cywww",
    //  "access": "Adapted from I Know Why the Caged Bird Sings by Maya Angelou.html"
    //}
  //];
  }

  ngOnInit() {
    this.feedItems = this.page.init('cywww', 'type', { reverse: false, prepend: false })
    console.log(this.feedItems)
  }

  openFull(feedItem: Object) {
    this.navCtrl.push("CywwwItemPage", {
      "feedItem": feedItem
    });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.feedItems.more();
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }


}
