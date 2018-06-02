import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PaginationService } from '../../services/pagination.service';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(
    public navCtrl: NavController,
    public page: PaginationService
  ) {
    this.page.init('cywww', 'header', {reverse: false, prepend: false});
  }

  openFull(feedItem) {
    this.navCtrl.push("CywwwItemPage", {
      "feedItem": feedItem
    });
  }

  doInfinite(infiniteScroll) {
    this.page.more();
    infiniteScroll.complete();
  }

}
