import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';

@IonicPage()
@Component({
  selector: 'page-cywww-item',
  templateUrl: 'cywww-item.html',
})
export class CywwwItemPage {

  feedItem: Object;
  text: String;

  constructor(public navParams: NavParams, private storage: AngularFireStorage) {
    this.feedItem = navParams.get("feedItem");
    this.getCywww(this.feedItem);
  }

  getCywww(feedItem: Object) {
    this.storage.ref(feedItem["access"])
      .getDownloadURL()
      .toPromise()
      .then(url => fetch(url))
      .then(response => response.text())
      .then(data => this.text = data)
      .catch(error => this.text = "Error: " + error);
  }

}

