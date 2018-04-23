import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  showSkip: boolean = true;

  @ViewChild('slides') slides: Slides;

  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  startApp() {
    this.navCtrl.setRoot("FeedPage").then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    });
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

}
