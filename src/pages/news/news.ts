import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

import { NewsService } from '../../services/news.service';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class NewsPage {

  constructor(
    private newsService: NewsService,
    private inAppBrowser: InAppBrowser,
    private storage: Storage
  ) {
    let keywords = [];
    this.storage.get('keywords').then(x => keywords = x).catch(() => { return });
    this.newsService.init(keywords, 'df20978da5994f7c9880e7017771b3e6');
  }

  doInfinite(infiniteScroll) {
    this.newsService.more();
    infiniteScroll.complete();
  }

  openWebpage(url: string) {

    const options: InAppBrowserOptions = {
      clearcache: 'yes',
      location: 'yes',
      footer: 'yes',
      closebuttoncaption: 'Close'
    }

    const browser = this.inAppBrowser.create(url, '_self', options)

  }

}