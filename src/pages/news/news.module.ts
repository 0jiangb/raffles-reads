import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NewsPage } from './news';

import { NewsService } from '../../services/news.service';

@NgModule({
  declarations: [NewsPage],
  imports: [
    IonicPageModule.forChild(NewsPage)
  ],
  providers: [
    NewsService,
    InAppBrowser
  ]
})
export class NewsPageModule {
}
