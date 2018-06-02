import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';

@IonicPage()
@Component({
  selector: 'page-cywww-item',
  templateUrl: 'cywww-item.html',
})
export class CywwwItemPage {

  text: Promise<string>;

  constructor(public navParams: NavParams, private storage: AngularFireStorage) {
    this.text = this.getCywww(this.navParams.get("feedItem"));
  }

  getCywww(feedItem): Promise<string> {
    return this.storage.ref(feedItem["access"])
      .getDownloadURL()
      .toPromise()
      .then(url => fetch(url))
      .then(response => response.text())
      .catch(error => "Error:" + error.message);
  }

}

