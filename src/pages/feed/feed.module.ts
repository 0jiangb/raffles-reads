import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FeedPage } from './feed';

import { PaginationService } from '../../services/pagination.service';

const firebaseConfig = {
  apiKey: "AIzaSyBdiBZnG71soLiaQod1hIlHhn5Azv65SKU",
  authDomain: "raffles-reads.firebaseapp.com",
  databaseURL: "https://raffles-reads.firebaseio.com",
  projectId: "raffles-reads",
  storageBucket: "raffles-reads.appspot.com",
  messagingSenderId: "547104769444"
};

@NgModule({
  declarations: [FeedPage],
  imports: [
    IonicPageModule.forChild(FeedPage)
  ],
  providers: [PaginationService]
})
export class FeedPageModule {
}
