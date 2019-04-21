import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';

@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html'
})
export class AnunciosPage {

    username:string;

    // anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidEnter()
   {
       // this.anuncios$ = [{
       //     id: "1",
       //     nombreUsuario: "string",
       //     nPersonas: "string",
       //     fSalida: "string",
       //     fRecogida: "string",
       //     localizacion: "string",
       //     nKm: "string",
       //     asegurado: "string",
       //     cancelacion: "string",
       //     alquilado: "string",
       // }]
   }

    ionViewDidLoad() {
        this.menuCtrl.enable(false, 'arrendadorMenu');
        this.menuCtrl.enable(true, 'arrendatarioMenu');
    }

}
