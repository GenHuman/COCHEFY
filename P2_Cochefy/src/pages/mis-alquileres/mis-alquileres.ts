import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from '../../models/anuncio.model';
import { Oferta } from '../../models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { Observable } from 'rxjs';

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

    alquileres$: Observable<Oferta[]>;
    anuncio$: Observable<Anuncio[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private OfertaService: OfertaService, private AnuncioService: AnuncioService) {
      this.username = JSON.parse(window.localStorage.getItem("username"));
    }

  ionViewDidLoad() {
      this.menuCtrl.enable(true, 'arrendadorMenu');
      this.menuCtrl.enable(false, 'arrendatarioMenu');
  }

  ionViewDidEnter()
 {
     this.alquileres$ = this.OfertaService
      .getOfertas().snapshotChanges() //cambios
      .map(
        changes => {
          return changes.filter (c => {
              let oferta = c.payload.val()
              if (oferta.nombreEmpresa == this.username && oferta.ofertaAceptada) {
                  return true;
              } else return false;
          })
          .map(c => {
               return {
                    ...c.payload.val()
               }
           });
        });

        this.anuncio$ = this.AnuncioService
         .getAnuncios().snapshotChanges() //cambios
         .map(
           changes => {
             return changes.filter (c => {
                 let anuncio = c.payload.val()
                 if (anuncio.alquilado) {
                     return true;
                 } else return false;
             })
             .map(c => {
                  return {
                       ...c.payload.val()
                  }
              });
           });
 }

}
