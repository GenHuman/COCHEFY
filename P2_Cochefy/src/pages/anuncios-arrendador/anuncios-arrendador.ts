import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';

/**
 * Generated class for the AnunciosArrendadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anuncios-arrendador',
  templateUrl: 'anuncios-arrendador.html',
})
export class AnunciosArrendadorPage {

    username:string;

    // anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'arrendadorMenu');
        this.menuCtrl.enable(false, 'arrendatarioMenu');
    }

}
