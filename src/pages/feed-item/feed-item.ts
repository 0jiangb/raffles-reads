import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'page-feed-item',
  templateUrl: 'feed-item.html',
})
export class FeedItemPage {

  feedItem: Object;
  text: String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: AngularFireStorage) {
    this.feedItem = navParams.get("feedItem");
    this.getCywww(this.feedItem);
  }

  getCywww(feedItem: Object){
    this.storage.ref(feedItem["access"])
      .getDownloadURL()
      .toPromise()
      .then(url => fetch(url))
      .then(response => response.text())
      .then(data => this.text = data);
    }

}

