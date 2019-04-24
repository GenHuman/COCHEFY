import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Anuncio } from '../../models/anuncio.model';
import { AnuncioService } from '../../services/anuncio.service';
import { Observable } from 'rxjs';
import { HacerOfertaPage } from '../hacer-oferta/hacer-oferta';

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

    anuncios$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private AnuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

    ionViewDidLoad() {
        this.menuCtrl.enable(true, 'arrendadorMenu');
        this.menuCtrl.enable(false, 'arrendatarioMenu');
    }

    ionViewDidEnter()
   {
       this.anuncios$ = this.AnuncioService
        .getAnuncios().snapshotChanges() //cambios
        .map(
          changes => {
            return changes.filter (c => {
                let anuncio = c.payload.val()
                if (anuncio.alquilado) {
                    return false;
                } else return true;
            })
            .map(c => {
                 return {
                      ...c.payload.val()
                 }
             });
          });
   }

   hacerOferta (id) {
       this.navCtrl.push(HacerOfertaPage, {
           anuncioId: id
       });
   }

}
