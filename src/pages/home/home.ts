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
    this.items = [{"header": "Hello", "shortForm": "hello2"}];
  }

}
