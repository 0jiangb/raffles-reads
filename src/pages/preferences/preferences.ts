import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  keywords: Array<string>

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
  ) {
    this.storage.set('keywords', JSON.stringify(this.keywords));
  }

  update() {
    this.storage.set('keywords', JSON.stringify(this.keywords));
  }

}
