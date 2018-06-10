import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NewsPage } from './news';

import { PaginationService } from '../../services/pagination.service';
import { NewsService } from '../../services/news.service';

const firebaseConfig = {
  apiKey: "AIzaSyBdiBZnG71soLiaQod1hIlHhn5Azv65SKU",
  authDomain: "raffles-reads.firebaseapp.com",
  databaseURL: "https://raffles-reads.firebaseio.com",
  projectId: "raffles-reads",
  storageBucket: "raffles-reads.appspot.com",
  messagingSenderId: "547104769444"
};

@NgModule({
  declarations: [NewsPage],
  imports: [
    IonicPageModule.forChild(NewsPage)
  ],
  providers: [
    PaginationService,
    NewsService,
    InAppBrowser
  ]
})
export class NewsPageModule {
}
