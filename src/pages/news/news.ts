import { Component, OnInit, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { PaginationService } from '../../services/pagination.service';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news.interface';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})


export class NewsPage implements OnInit {

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
  newsList: Array<News> = [];
   @Input('news') news:News;

  constructor(
    private newsService: NewsService,
    private inAppBrowser: InAppBrowser
  ) { }

  ngOnInit() {
    this.getNews(this.selectedCategory);
  }

  getNews(category: string){
    this.isLoading = true;
    // When clicking sidenav category, change selectedCategory to the clicked category
    if(category != this.selectedCategory) {
      this.selectedCategory = category;
      this.menuOpen = false;
    }

    this.newsService.getNews(category).then(response=>{
      this.isLoading = false;
      this.newsList = response.articles;
    },error=>{
      alert(error);
      this.isLoading = false;
    });
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
