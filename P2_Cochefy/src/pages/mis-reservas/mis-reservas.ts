import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Reserva } from '../../models/reserva.model';

/**
 * Generated class for the MisReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-reservas',
  templateUrl: 'mis-reservas.html',
})
export class MisReservasPage {

    username:string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(false, 'arrendadorMenu');
      this.menuCtrl.enable(true, 'arrendatarioMenu');
  }

}
