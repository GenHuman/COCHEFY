import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';

/**
 * Generated class for the AcercaDeArrendadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de-arrendador',
  templateUrl: 'acerca-de-arrendador.html',
})
export class AcercaDeArrendadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'arrendadorMenu');
    this.menuCtrl.enable(false, 'arrendatarioMenu');
  }

}
