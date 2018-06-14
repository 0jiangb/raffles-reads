import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';


import { PaginationService } from '../../services/pagination.service';

@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    // private toastCtrl: ToastController
  ) {
    this.preferences = this.keywords;
    this.storage.set('preferences','true');
  }

  update() {
    this.preferences=this.keywords;
    this.storage.set('preferences','true');
    // presentToast();
  }

//   presentToast() {
//   let toast = this.toastCtrl.create({
//     message: 'Updated successfully',
//     duration: 3000,
//     position: 'top'
//   });
//
//   toast.onDidDismiss(() => {
//     console.log('Dismissed toast');
//   });
//
//   toast.present();
// }

}
