import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Reserva } from '../../models/reserva.model';

/**
 * Generated class for the MisAlquileresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-alquileres',
  templateUrl: 'mis-alquileres.html',
})
export class MisAlquileresPage {

    username:string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(true, 'arrendadorMenu');
      this.menuCtrl.enable(false, 'arrendatarioMenu');
  }

}
