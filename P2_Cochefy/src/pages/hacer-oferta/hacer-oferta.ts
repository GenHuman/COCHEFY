import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Oferta } from '../../models/oferta.model';

/**
 * Generated class for the HacerOfertaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hacer-oferta',
  templateUrl: 'hacer-oferta.html',
})
export class HacerOfertaPage {

    username:string;
    idAnuncio:string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
      this.idAnuncio = this.navParams.get('idAnuncio');
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(true, 'arrendadorMenu');
      this.menuCtrl.enable(false, 'arrendatarioMenu');
  }

}
