import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the AcercaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de',
  templateUrl: 'acerca-de.html',
})
export class AcercaDePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'arrendadorMenu');
    this.menuCtrl.enable(true, 'arrendatarioMenu');
  }

}
