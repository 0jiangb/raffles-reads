import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController } from 'ionic-angular';

import { PaginationService } from '../../services/pagination.service';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(
    public navCtrl: NavController,
    public page: PaginationService,
    public auth: AuthService,
    private toastCtrl:ToastController
  ) {
    if (!auth.isVerified()) {
      let toast = this.toastCtrl.create({
        message: 'You need to verify your email to use this feature',
        duration: 3000,
        position: 'top'
      })
      toast.present()
      return
    }
    this.page.init('cywww', 'time', {reverse: false, prepend: false});
  }

  openFull(feedItem) {
    this.navCtrl.push("CywwwItemPage", {
      "feedItem": feedItem
    });
  }

  doInfinite(infiniteScroll) {
    if (!this.auth.isVerified()) {
      let toast = this.toastCtrl.create({
        message: 'You need to verify your email to use this feature',
        position: 'top'
      })
      toast.present()
      return
    }
    this.page.more();
    infiniteScroll.complete();
  }

}
