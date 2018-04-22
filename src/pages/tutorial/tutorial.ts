import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FeedPage } from '../feed/feed';


@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip = true;

	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public storage: Storage
  ) { }

  startApp() {
    this.navCtrl.push(FeedPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

}
