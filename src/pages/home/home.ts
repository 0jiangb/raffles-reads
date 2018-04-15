import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<Object>;
  constructor(private storage: AngularFireStorage) {
    this.items = [{"header": "Hello", "shortForm": "hello2"},{"header": "Hello", "shortForm": "hello2", "imgSrc": "https://sms.math.nus.edu.sg/PrizePresentation/PhotoSMO2016/SMOJunior/content/images/large/2016_SMS_APPC_small-189.jpg"}];
  }

}
