import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news.interface';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})


export class NewsPage {

  menuOpen: boolean = false;
  isLoading: boolean = false;

  categories = [
    {name: 'general'},
    {name: 'business'},
    {name: 'entertainment'},
    {name: 'health'},
    {name: 'science'},
    {name: 'sports'},
    {name: 'technology'},
  ];

  selectedCategory: string = 'general';

  constructor(
    private newsService: NewsService,
    private inAppBrowser: InAppBrowser
  ) { 
    this.newsService.init(this.selectedCategory);
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
